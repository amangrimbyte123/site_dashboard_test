import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    // Use the correct path for Vercel deployment
    const filePath = path.join(process.cwd(), 'components', 'Content', 'ContactInfo.json');
    
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } catch (readError) {
      console.error('Error reading file:', readError);
      // Return empty data structure if file doesn't exist
      return NextResponse.json({
        No: '',
        tel: '',
        mail: '',
        baseUrl: '',
        host: '',
        name: '',
        address: '',
        service: '',
        location: '',
        zipCode: '',
        bannerImage: '',
        logoImage: ''
      });
    }
  } catch (error) {
    console.error('Error in get-contact-info:', error);
    return NextResponse.json(
      { error: 'Failed to read contact information' },
      { status: 500 }
    );
  }
} 