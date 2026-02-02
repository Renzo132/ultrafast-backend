import { Hono } from "hono";
import { trpcServer } from "./trpc.js";
export const honoApp = new Hono();
honoApp.get("/", (c) => c.text("Ultrafast Backend Running"));
honoApp.route("/api/trpc", trpcServer);
