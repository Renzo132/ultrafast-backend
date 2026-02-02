import { initTRPC } from '@trpc/server';
import { z } from 'zod';
const t = initTRPC.create();
export const createHonoTRPCRouter = () => t.router({
    ping: t.procedure.query(() => ({ pong: true, time: new Date().toISOString() })),
    createBooking: t.procedure
        .input(z.object({
        customerName: z.string(),
        address: z.string(),
        serviceType: z.enum(['pickup', 'delivery']),
        date: z.string()
    }))
        .mutation(({ input }) => ({
        ...input,
        id: Math.floor(Math.random() * 1000)
    }))
});
