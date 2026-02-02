import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./router.js";

const app = new Hono();

app.get("/", (c) => c.text("Ultrafast Backend Running"));

app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter
  })
);

const port = Number(process.env.PORT) || 3000;

serve({
  fetch: app.fetch,
  port
});

console.log(`🚀 Server running on port ${port}`);