import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET() {
  const data = await db.query.interviews.findMany();
  return NextResponse.json(data);
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("resume");

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

  const filePath = path.join(uploadDir, file.name);
  fs.writeFileSync(filePath, buffer);

  // Save metadata
  await db.insert(resumes).values({
    fileName: file.name,
    filePath,
  });
  const { title } = await req.json();

  await db.insert(db._.schema.interviews).values({
    title,
  });

  return NextResponse.json({ success: true });
}