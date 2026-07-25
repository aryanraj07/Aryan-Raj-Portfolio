"use client";
import Button from "@/components/Button";
import axios from "axios";
import { toast } from "sonner";
import {
  CreateProjectInput,
  createProjectSchema,
} from "@/lib/validations/projects";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
const MAX_IMAGE_SIZE_MB = 5;
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const imageFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_IMAGE_SIZE_BYTES, {
    message: `Image must be under ${MAX_IMAGE_SIZE_MB}MB`,
  })
  .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
    message: "Only JPG, PNG or WEBP images allowed",
  });
export const createProjectFormSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  thumbnail: imageFileSchema.optional(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  techStack: z.array(z.string()),
  featured: z.boolean(),
  isActive: z.boolean(),
});

// type ProjectDataProps={
//   projectData?:

// }
export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  thumbnail: string;
  githubUrl: string | null;
  liveUrl: string | null;
  techStack: string[];
  featured: boolean;
  isActive: boolean;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
}
interface CreateProjectFormInputProps {
  projectData?: ProjectData | null;
}
export type CreateProjectFormInput = z.infer<typeof createProjectFormSchema>;
const AddProjects = ({ projectData }: CreateProjectFormInputProps) => {
  const [techStackText, setTechStackText] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,

    formState: { isSubmitting, errors },
  } = useForm<CreateProjectFormInput>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      category: "",
      githubUrl: "",
      thumbnail: undefined,
      liveUrl: "",
      techStack: [],
      featured: false,
      isActive: true,
    },
  });
  const isEditMode = !!projectData;
  const onSubmit: SubmitHandler<CreateProjectFormInput> = async (data) => {
    try {
      const formData = new FormData();

      if (data.thumbnail) {
        formData.append("thumbnail", data.thumbnail);
      }

      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("description", data.description);
      formData.append("category", data.category);

      formData.append("githubUrl", data.githubUrl ?? "");

      formData.append("liveUrl", data.liveUrl ?? "");

      formData.append("featured", String(data.featured));

      formData.append("isActive", String(data.isActive));

      formData.append("techStack", JSON.stringify(data.techStack));
      if (isEditMode) {
        await axios.patch(`/api/projects/${projectData.id}`, formData);
        toast.success("Project updated successfully");
      } else {
        await axios.post("/api/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Project added successfully");
      }

      reset();
    } catch (error) {
      toast.error("Failed to add project");
      console.error(error);
    }
  };
  useEffect(() => {
    if (projectData) {
      reset({
        title: projectData.title,
        slug: projectData.slug,
        description: projectData.description,
        category: projectData.category,
        githubUrl: projectData.githubUrl ?? "",
        liveUrl: projectData.liveUrl ?? "",
        techStack: projectData.techStack ?? [],
        featured: projectData.featured,
        isActive: projectData.isActive,
      });
      setTechStackText(projectData.techStack.join(", "));
    }
  }, [projectData, reset]);

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 ">
        {isEditMode ? "Edit Project" : "Add Project"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Project Title
          </label>

          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="AI Resume Builder"
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium mb-2">
            Project Slug
          </label>

          <input
            id="slug"
            type="text"
            {...register("slug")}
            placeholder="ai-resume-builder"
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>

          <textarea
            id="description"
            rows={5}
            {...register("description")}
            placeholder="Describe your project..."
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>

          <input
            id="category"
            type="text"
            {...register("category")}
            placeholder="Full Stack"
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium mb-2">
            Thumbnail File
          </label>
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setValue("thumbnail", file, {
                shouldValidate: true,
              });
            }}
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>
        {/* GitHub URL */}
        <div>
          <label htmlFor="githubUrl" className="block text-sm font-medium mb-2">
            GitHub URL
          </label>

          <input
            id="githubUrl"
            type="url"
            {...register("githubUrl")}
            placeholder="https://github.com/..."
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        {/* Live URL */}
        <div>
          <label htmlFor="liveUrl" className="block text-sm font-medium mb-2">
            Live URL
          </label>

          <input
            id="liveUrl"
            type="url"
            {...register("liveUrl")}
            placeholder="https://..."
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label htmlFor="techStack" className="block text-sm font-medium mb-2">
            Tech Stack
          </label>

          <input
            id="techStack"
            type="text"
            value={techStackText}
            placeholder="Next.js, TypeScript, Prisma"
            onChange={(e) => {
              const value = e.target.value;
              setTechStackText(value);
              setValue(
                "techStack",
                value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean),
              );
            }}
            className="w-full px-4 py-3 rounded-xl bg-surface focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        {/* Featured */}
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("featured")} />
            Featured Project
          </label>
        </div>

        <Button
          className="w-full"
          type="submit"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : isEditMode
              ? "Update Project"
              : "Add Project"}
        </Button>
      </form>
    </div>
  );
};
export default AddProjects;
