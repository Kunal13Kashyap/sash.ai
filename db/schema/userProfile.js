import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

/**
 * UserProfile
 * One row per human user
 * Clerk user ID is the identity source
 */
export const userProfiles = pgTable("user_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),

  clerkUserId: varchar("clerk_user_id", { length: 255 })
    .notNull()
    .unique(),

  fullName: varchar("full_name", { length: 255 }),

  email: varchar("email", { length: 255 }).notNull(),

  currentRole: varchar("current_role", { length: 255 }),

  experienceLevel: varchar("experience_level", {
    length: 50,
  }), // fresher | mid | senior

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
