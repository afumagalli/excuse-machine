import { prisma } from "@/lib/prisma";

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const excuse = await prisma.excuse.update({
      where: { id },
      data: { upvotes: { increment: 1 } },
    });
    return Response.json(excuse);
  } catch (e) {
    if (e && typeof e === "object" && "code" in e && e.code === "P2025") {
      return Response.json({ error: "Excuse not found" }, { status: 404 });
    }
    throw e;
  }
}
