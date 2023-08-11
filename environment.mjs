import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const environmentVariables = createEnv({
  runtimeEnv: process.env,
  server: {
    DATABASE_URL: z.string().url(),

    NEXTAUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
  },
});
