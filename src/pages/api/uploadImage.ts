import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function uploadImage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { id, imageURL } = req.body;
  const entry = await prisma.imageData.findUnique({
    where: {
      serviceId: Number(id),
    },
  });
  if (entry) {
    await prisma.imageData.update({
      where: { serviceId: Number(id) },
      data: { photoUrl: imageURL },
    });
  } else {
    await prisma.imageData.create({ data: { serviceId: Number(id), photoUrl: imageURL } });
  }
  res.status(200).json({ message: 'Image Url Saved Successfully' });
}
