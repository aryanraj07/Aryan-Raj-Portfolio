import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { unknown } from "zod";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await prisma.project.delete({
      where: {
        id,
      },
    });
    return Response.json({ success: true, message: "Project deleted" });
  } catch (err: unknown) {
    console.log(err);
    return Response.json({
      success: false,
      message: err instanceof Error ? err.message : "Project deleted",
    });
  }
}
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const formData = await request.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    const githubUrl = formData.get("githubUrl") as string;
    const liveUrl = formData.get("liveUrl") as string;

    const featured = formData.get("featured") === "true";
    const isActive = formData.get("isActive") === "true";

    const techStack = JSON.parse(formData.get("techStack") as string);

    const project = await prisma.project.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        description,
        category,
        githubUrl,
        liveUrl,
        featured,
        isActive,
        techStack,
      },
    });

    return Response.json({
      success: true,
      data: project,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        success: false,
        message:
          err instanceof Error ? err.message : "Failed to update project",
      },
      { status: 500 },
    );
  }
}
