import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET() {
  const data = await db.query.interviews.findMany();
  return NextResponse.json(data);
}

export async function POST(req) {
  const { title } = await req.json();

  await db.insert(db._.schema.interviews).values({
    title,
  });

  return NextResponse.json({ success: true });
}