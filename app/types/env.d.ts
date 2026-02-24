interface Env {
  DB: D1Database;
  BREVO_API_KEY: string;
  BREVO_FROM_EMAIL: string;
  BREVO_FROM_NAME: string;
  ADMIN_TOKEN: string;
}

declare module "react-router" {
  interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}
