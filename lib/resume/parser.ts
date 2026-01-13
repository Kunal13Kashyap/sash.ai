// lib/resume/parser.ts

import { ResumeSchema } from "./schema";

/**
 * IMPORTANT:
 * This file must NEVER be imported on the client
 */
if (typeof window !== "undefined") {
  throw new Error("Resume parser cannot run on client");
}

export async function parseResumeText(
  extractedText: string
): Promise<ResumeSchema> {
  /**
   * This is where OpenResume logic plugs in.
   * For now we normalize into OUR schema.
   */

  return {
    basics: {
      fullName: extractName(extractedText),
      email: extractEmail(extractedText),
      phone: extractPhone(extractedText),
      summary: extractSummary(extractedText),
    },
    work: [],
    education: [],
    skills: extractSkills(extractedText),
    projects: [],
  };
}

/* ---------------- HELPERS ---------------- */

function extractEmail(text: string): string {
  const match = text.match(
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
  );
  return match?.[0] ?? "";
}

function extractPhone(text: string): string | undefined {
  const match = text.match(
    /(\+?\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/
  );
  return match?.[0];
}

function extractName(text: string): string {
  // placeholder – OpenResume improves this
  return text.split("\n")[0]?.slice(0, 40) ?? "";
}

function extractSummary(text: string): string {
  return text.slice(0, 300);
}

function extractSkills(text: string) {
  const skills = ["React", "Node", "Python", "SQL", "AWS"];

  return skills
    .filter(skill => text.toLowerCase().includes(skill.toLowerCase()))
    .map(skill => ({
      id: crypto.randomUUID(),
      name: skill,
    }));
}
