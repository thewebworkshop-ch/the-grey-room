import "dotenv/config";
import { defineConfig } from "prisma/config";
import { z } from "zod";

// Validate DATABASE_URL before Prisma attempts connection (fail-fast)
const env = z
  .object({
    DATABASE_URL: z.url(),
  })
  .parse(process.env);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env.DATABASE_URL,
  },
});
