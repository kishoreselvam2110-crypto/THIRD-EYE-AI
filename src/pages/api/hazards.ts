// src/pages/api/hazards.ts
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.resolve(process.cwd(), 'src', 'data', 'hazards.geojson');
    const data = await fs.readFile(filePath, 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading hazards.geojson:', error);
    res.status(500).json({ error: 'Failed to load hazard data' });
  }
}
