import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    const filePath = path.join(process.cwd(), 'components/Content/ContactInfo.json');
    
    try {
      // Read existing data
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const existingData = JSON.parse(fileContent);
      
      // Validate the new data
      if (!newData || typeof newData !== 'object') {
        return NextResponse.json(
          { error: 'Invalid data format' },
          { status: 400 }
        );
      }

      // Merge the new data with existing data
      const updatedData = {
        ...existingData,
        ...newData
      };
      
      // Create a temporary file path
      const tempFilePath = `${filePath}.tmp`;
      
      // Write to temporary file first
      await fs.writeFile(tempFilePath, JSON.stringify(updatedData, null, 2));
      
      // Rename temporary file to original file (atomic operation)
      await fs.rename(tempFilePath, filePath);
      
      return NextResponse.json({ 
        success: true,
        message: 'Contact information updated successfully',
        data: updatedData
      });
    } catch (fileError) {
      console.error('Error handling file operations:', fileError);
      
      // Try to clean up temporary file if it exists
      try {
        const tempFilePath = `${filePath}.tmp`;
        await fs.access(tempFilePath);
        await fs.unlink(tempFilePath);
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
      
      return NextResponse.json(
        { error: 'Failed to update contact information. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
} 