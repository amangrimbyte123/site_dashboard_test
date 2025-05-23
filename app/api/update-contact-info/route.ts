import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    
    // Read the existing JSON file
    const filePath = path.join(process.cwd(), 'components', 'Content', 'ContactInfo.json');
    
    try {
      const existingData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
      
      // Merge the new data with existing data
      const updatedData = {
        ...existingData,
        ...newData
      };
      
      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
      
      // Verify the write operation
      const verifyData = await fs.readFile(filePath, 'utf-8');
      if (!verifyData) {
        throw new Error('Write verification failed');
      }
      
      return NextResponse.json({ 
        success: true,
        message: 'Contact information updated successfully',
        data: updatedData
      });
    } catch (readError) {
      console.error('Error reading/writing file:', readError);
      return NextResponse.json(
        { error: 'Failed to read or write contact information file' },
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