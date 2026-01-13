import { db } from "./db";
import { userProfiles } from "./schema";
import { eq } from "drizzle-orm";

export async function ensureUserProfile({
  clerkUserId,
  email,
  fullName,
}) {
  const existing = await db
    .select()
    .from(userProfiles)
    .where(eq(userProfiles.clerkUserId, clerkUserId))
    .limit(1);

  if (existing.length > 0) {
    return existing[0];
  }

  const [created] = await db
    .insert(userProfiles)
    .values({
      clerkUserId,
      email,
      fullName,
    })
    .returning();

  return created;
}
