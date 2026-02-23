import { createPagesFunctionHandler } from "@react-router/cloudflare";
// @ts-ignore - build output generated at build time
import * as build from "../build/server";

const handleRequest = createPagesFunctionHandler({ build });

export function onRequest(
  context: EventContext<Record<string, unknown>, string, Record<string, unknown>>,
) {
  return handleRequest(context);
}
