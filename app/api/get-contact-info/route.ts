import { NextResponse } from 'next/server';
import ContactInfo from '@/components/Content/ContactInfo.json';

export async function GET() {
  try {
    return NextResponse.json(ContactInfo);
  } catch (error) {
    console.error('Error in get-contact-info:', error);
    return NextResponse.json(
      { error: 'Failed to read contact information' },
      { status: 500 }
    );
  }
} 