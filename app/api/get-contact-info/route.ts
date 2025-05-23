import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'components/Content/ContactInfo.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(fileContent));
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read data' },
      { status: 500 }
    );
  }
} 