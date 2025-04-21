import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const CustomerService = {
  createCustomer: async (payload: any) => {
    return await prisma.customer.create({ data: payload });
  },

  getAllCustomers: async () => {
    return await prisma.customer.findMany();
  },

  getSingleCustomer: async (id: string) => {
    return await prisma.customer.findUnique({ where: { customerId: id } });
  },

  updateCustomer: async (id: string, payload: any) => {
    return await prisma.customer.update({
      where: { customerId: id },
      data: payload,
    });
  },

  deleteCustomer: async (id: string) => {
    return await prisma.customer.delete({ where: { customerId: id } });
  },
};
