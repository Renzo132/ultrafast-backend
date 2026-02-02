import { initTRPC } from "@trpc/server";
import { createHonoTRPCRouter } from "./router.js";
const t = initTRPC.create();
export const trpcRouter = t.router({
    hello: t.procedure.query(() => {
        return "Hello from tRPC";
    })
});
export const trpcServer = createHonoTRPCRouter(trpcRouter);
