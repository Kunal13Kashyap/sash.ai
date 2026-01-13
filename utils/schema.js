import { pgTable, serial, text, varchar, timestamp, uuid} from "drizzle-orm/pg-core";

export const resumes = pgTable("resumes", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id"), // Clerk userId later
  fileName: text("file_name").notNull(),
  filePath: text("file_path").notNull(),
  textContent: text("text_content"), // parsed resume text
  createdAt: timestamp("created_at").defaultNow(),
});

export const MockInterview= pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),

})

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

