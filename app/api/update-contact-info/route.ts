import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    
    try {
      // Try to get existing data from KV store
      let existingData = await kv.get('contact-info') || {};
      
      // Merge the new data with existing data
      const updatedData = {
        ...existingData,
        ...newData
      };
      
      // Store the updated data in KV
      await kv.set('contact-info', updatedData);
      
      return NextResponse.json({ 
        success: true,
        message: 'Contact information updated successfully',
        data: updatedData
      });
    } catch (kvError) {
      console.error('Error handling KV operations:', kvError);
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