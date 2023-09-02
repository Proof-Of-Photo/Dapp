import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getImage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });
  const { id } = req.query;
  const entry = await prisma.imageData.findUnique({ where: { serviceId: Number(id) } });
  if (!entry) return res.status(404).json({ message: 'image not found' });
  res.status(200).json({ imageURL: entry.photoUrl });
}
