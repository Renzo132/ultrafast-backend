import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { trpcServer } from './trpc';
import { createHonoTRPCRouter } from './router';

const app = new Hono();

// Enable CORS
app.use('*', cors());

// Root test route
app.get('/', (c) => c.json({ message: 'Backend running 🚀' }));

// tRPC placeholder route
app.route('/api/trpc', trpcServer(createHonoTRPCRouter()));

const port = process.env.PORT || 8080;

// Start server (Node adapter)
import { serve } from '@hono/node-server';
serve(app, { port }).then(() => {
  console.log(`🚀 Server listening on 0.0.0.0:${port}`);
});