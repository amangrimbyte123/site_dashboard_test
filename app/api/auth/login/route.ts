import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    // Read users file from dashboard directory
    const filePath = path.join(process.cwd(), 'app', 'dashboard', 'users.json');
    const usersData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    
    // Check if user exists and password matches
    if (usersData[username] && usersData[username].password === password) {
      // Generate a simple token (in production, use a more secure method)
      const token = crypto.randomBytes(32).toString('hex');
      
      return NextResponse.json({
        success: true,
        token,
        user: {
          username,
          role: usersData[username].role
        }
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid username or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
} 