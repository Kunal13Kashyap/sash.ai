import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// 🚨 Server-only guard (keep this)
if (typeof window !== "undefined") {
  throw new Error("❌ db.js was imported on the client");
}

if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is not set");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
