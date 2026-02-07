import { createAuthClient } from "better-auth/react";
const baseURL =
  process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_AUTH_API_URL;
if (!baseURL) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_AUTH_API_URL");
}
export const authClient = createAuthClient({
  baseURL,
});
