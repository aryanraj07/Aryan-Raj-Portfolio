// src/actions/project.ts

"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  });

  revalidatePath("/admin/projects");
}

export async function toggleProjectStatus(id: string, isActive: boolean) {
  await prisma.project.update({
    where: { id },
    data: {
      isActive,
    },
  });

  revalidatePath("/admin/projects");
  revalidatePath("/");
}
