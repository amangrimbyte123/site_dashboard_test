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
      
      // Merge the new data with existing data
      const updatedData = {
        ...existingData,
        ...newData
      };
      
      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
      
      return NextResponse.json({ 
        success: true,
        message: 'Contact information updated successfully',
        data: updatedData
      });
    } catch (fileError) {
      console.error('Error handling file operations:', fileError);
      return NextResponse.json(
        { error: 'Failed to update contact information' },
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