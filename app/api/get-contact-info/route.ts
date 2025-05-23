import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'components/Content/ContactInfo.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in get-contact-info:', error);
    return NextResponse.json(
      { error: 'Failed to read contact information' },
      { status: 500 }
    );
  }
} 