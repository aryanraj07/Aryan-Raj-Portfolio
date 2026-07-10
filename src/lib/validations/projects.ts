import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  thumbnail: z.string(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  techStack: z.array(z.string()),
  featured: z.boolean().default(false),
  isActive: z.boolean().default(true),
});

export type CreateProjectInput = z.input<typeof createProjectSchema>;
