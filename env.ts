import { z, ZodError } from "zod";

const envSchema = z.object({
  POSTMARK_API_TOKEN: z.string(),
  POSTMARK_FROM_EMAIL_ADDRESS: z.string(),
});

// throw if missing!
try {
  envSchema.parse(process.env);
} catch (e) {
  if (e instanceof ZodError) {
    console.error("Missing or invalid environment variables:", e.errors);
  } else {
    console.error("An unknown error occurred:", e);
  }
  process.exit(1);
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
