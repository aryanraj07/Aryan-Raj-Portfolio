import prisma from "@/lib/prisma";
import { createProjectSchema } from "@/lib/validations/projects";
import uploadToCloudinary from "@/utils/uploadToCloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const githubUrl = formData.get("githubUrl") as string;
    const liveUrl = formData.get("liveUrl") as string;
    const featured = formData.get("featured") === "true";
    const isActive = formData.get("isActive") === "true";
    const techStack = JSON.parse(formData.get("techStack") as string);

    const thumbnail = formData.get("thumbnail") as File;
    const bytes = await thumbnail.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadResult = await uploadToCloudinary(buffer);
    const thumbnailUrl = await uploadResult.secure_url;

    const payload = {
      title,
      slug,
      description,
      category,
      githubUrl,
      liveUrl,
      techStack,
      featured,
      isActive,
      thumbnail: thumbnailUrl,
    };

    const validatedData = createProjectSchema.parse(payload);

    const project = await prisma.project.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        data: project,
      },
      { status: 201 },
    );
  } catch (err: unknown) {
    // console.error(err.stack);

    return NextResponse.json(
      {
        success: false,
        message:
          err instanceof Error ? err.message : "Failed to create project",
        // stack: err.stack,
      },
      { status: 500 },
    );
  }
}
