import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const data = await kv.get('contact-info');
    
    if (!data) {
      // Return empty data structure if no data exists
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
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in get-contact-info:', error);
    return NextResponse.json(
      { error: 'Failed to read contact information' },
      { status: 500 }
    );
  }
} 