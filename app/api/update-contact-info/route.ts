import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    const filePath = path.join(process.cwd(), 'components/Content/ContactInfo.json');
    
    try {
      // Read existing data
      const fileContent = fs.readFileSync(filePath, 'utf-8');
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
      
      // Write the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf-8');
      
      return NextResponse.json({ 
        success: true,
        message: 'Contact information updated successfully',
        data: updatedData
      });
    } catch (fileError) {
      console.error('Error handling file operations:', fileError);
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