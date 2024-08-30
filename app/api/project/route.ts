// pages/api/projects.ts
import { Project } from '@/lib/models/project.models';
import { connectDB } from '@/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try {
    const projects = await Project.find().populate('user');
    res.status(200).json({ projects });
  } catch (error:any) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
}
