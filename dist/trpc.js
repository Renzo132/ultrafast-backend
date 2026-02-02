import { Hono } from 'hono';
export const trpcServer = (router) => {
    const app = new Hono();
    app.all('*', async (c) => {
        return c.json({ message: 'tRPC endpoint placeholder' });
    });
    return app;
};
