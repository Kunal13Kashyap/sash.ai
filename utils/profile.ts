// utils/profile.ts
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { userProfiles } from "./schema";
import { eq } from "drizzle-orm";

export async function getOrCreateUserProfile() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized: no Clerk user");
  }

  const clerkUserId = user.id;
  const email = user.emailAddresses[0]?.emailAddress ?? "";
  const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

  // 1️⃣ Check existing profile
  const existing = await db
    .select()
    .from(userProfiles)
    .where(eq(userProfiles.clerkUserId, clerkUserId))
    .limit(1);

  if (existing.length > 0) {
    return existing[0];
  }

  // 2️⃣ Create new profile (ONLY ONCE)
  const created = await db
    .insert(userProfiles)
    .values({
      clerkUserId,
      email,
      fullName,
    })
    .returning();

  return created[0];
}
