import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    const filePath = path.join(process.cwd(), 'components/Content/ContactInfo.json');
    
    // Write the data directly to the file
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
    
    return NextResponse.json({ 
      success: true,
      message: 'Data saved'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save data' },
      { status: 500 }
    );
  }
} 