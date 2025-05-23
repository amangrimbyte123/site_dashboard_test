import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'components', 'Content', 'ContactInfo.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading contact info:', error);
    return NextResponse.json(
      { error: 'Failed to read contact information' },
      { status: 500 }
    );
  }
} 