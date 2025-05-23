import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    
    // Read the existing JSON file
    const filePath = path.join(process.cwd(), 'components', 'Content', 'ContactInfo.json');
    const existingData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    
    // Merge the new data with existing data
    const updatedData = {
      ...existingData,
      ...newData
    };
    
    // Write the updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json(
      { error: 'Failed to update contact information' },
      { status: 500 }
    );
  }
} 