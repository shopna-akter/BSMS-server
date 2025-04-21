import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const ServiceService = {
    
    createService: async (payload: any) => {
        const bikeExists = await prisma.bike.findUnique({
          where: { bikeId: payload.bikeId }
        });
        if (!bikeExists) {
          throw new Error('Bike with the provided bikeId does not exist.');
        }
        return await prisma.service.create({ data: payload });
      },

  getAllServices: async () => {
    return await prisma.service.findMany();
  },

  getSingleService: async (id: string) => {
    return await prisma.service.findUnique({ where: { serviceId: id } });
  },

  markServiceAsCompleted: async (id: string, completionDate?: string) => {
    return await prisma.service.update({
      where: { serviceId: id },
      data: {
        status: 'done',
        completionDate: completionDate ? new Date(completionDate) : new Date(),
      },
    });
  },
  getPendingOrOverdueServices: async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Get date 7 days ago

    return await prisma.service.findMany({
      where: {
        OR: [
          { status: 'pending' },
          { status: 'in-progress' },
        ],
        serviceDate: {
          lt: sevenDaysAgo,
        },
      },
    });
  }
};
