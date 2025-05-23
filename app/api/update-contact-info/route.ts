import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    
    // Use the correct path for Vercel deployment
    const filePath = path.join(process.cwd(), 'components', 'Content', 'ContactInfo.json');
    
    try {
      // Try to read existing data, if file doesn't exist, use empty object
      let existingData = {};
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
      } catch (readError) {
        console.log('No existing file found, creating new one');
      }
      
      // Merge the new data with existing data
      const updatedData = {
        ...existingData,
        ...newData
      };
      
      // Ensure the directory exists
      const dirPath = path.dirname(filePath);
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (mkdirError) {
        console.log('Directory might already exist:', mkdirError);
      }
      
      // Write the updated data back to the file with proper error handling
      try {
        await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), {
          encoding: 'utf-8',
          flag: 'w'
        });
        
        // Verify the write operation
        const verifyContent = await fs.readFile(filePath, 'utf-8');
        if (!verifyContent) {
          throw new Error('Write verification failed');
        }
        
        return NextResponse.json({ 
          success: true,
          message: 'Contact information updated successfully',
          data: updatedData
        });
      } catch (writeError) {
        console.error('Write operation failed:', writeError);
        return NextResponse.json(
          { error: 'Failed to write contact information file' },
          { status: 500 }
        );
      }
    } catch (fileError) {
      console.error('Error handling file operations:', fileError);
      return NextResponse.json(
        { error: 'Failed to update contact information file' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process contact information update' },
      { status: 500 }
    );
  }
} 