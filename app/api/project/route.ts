// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Project } from '@/lib/models/project.models';
import { connectDB } from '@/mongoose';

// Connect to the database when the API route is invoked

export async function GET(request: NextRequest) {
    try {
      await connectDB();
    // Fetch all projects and populate the user field
    const projects = await Project.find().populate('user');
    
    // Return the projects in the response
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    // Handle any errors that occur during fetching
    return NextResponse.json(
      { message: 'Error fetching projects', error: error.message },
      { status: 500 }
    );
  }
}
