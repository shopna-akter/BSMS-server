import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const BikeService = {
  createBike: async (payload: any) => {
    return await prisma.bike.create({ data: payload });
  },

  getAllBikes: async () => {
    return await prisma.bike.findMany();
  },

  getSingleBike: async (id: string) => {
    return await prisma.bike.findUnique({ where: { bikeId: id } });
  },
};
