import { Hono } from 'hono';
import { createHonoTRPCRouter } from './router';
import { inferRouterOutputs } from '@trpc/server';

export const trpcServer = (router: ReturnType<typeof createHonoTRPCRouter>) => {
  const app = new Hono();

  app.all('*', async (c) => {
    return c.json({ message: 'tRPC endpoint placeholder' });
  });

  return app;
};

export type AppRouter = ReturnType<typeof createHonoTRPCRouter>;