import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  let body: { text?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Excuse text is required" },
      { status: 400 }
    );
  }

  const text = typeof body.text === "string" ? body.text.trim() : "";
  if (!text) {
    return Response.json(
      { error: "Excuse text is required" },
      { status: 400 }
    );
  }

  const excuse = await prisma.excuse.create({
    data: { text },
  });

  // Revalidate the home page cache to show the new excuse immediately
  revalidatePath("/");

  return Response.json(excuse, { status: 201 });
}
