import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema.
   * These are only available on the server.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    AUTH_SECRET: z.string().min(32),
    RESEND_API_KEY: z.string().startsWith("re_"),
    // Add provider secrets as you configure them:
    // GITHUB_CLIENT_ID: z.string(),
    // GITHUB_CLIENT_SECRET: z.string(),
  },

  /**
   * Client-side environment variables schema.
   * These are exposed to the client (prefixed with NEXT_PUBLIC_).
   */
  client: {
    // NEXT_PUBLIC_EXAMPLE: z.string(),
  },

  /**
   * Runtime environment variables.
   * This is used for both server and client.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    AUTH_SECRET: process.env.AUTH_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    // GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    // GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    // NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE,
  },

  /**
   * Skip validation in certain environments.
   */
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),

  /**
   * Makes it so that empty strings are treated as undefined.
   */
  emptyStringAsUndefined: true,
});
