"use client";
import { Pencil, Trash2 } from "lucide-react";
import { FeaturedBadge } from "./FeaturedBadge";
import { ActiveSwitch } from "./ActiveSwitch";
import Image from "next/image";
import { deleteProject } from "@/actions/projects";
import { useRouter } from "next/navigation";
import { Project } from "app_prisma/generated/prisma/browser";

export default function ProjectTable({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left px-6 py-4">Thumbnail</th>
          <th className="text-left px-6 py-4">Title</th>
          <th className="text-left px-6 py-4">Category</th>
          <th className="text-left px-6 py-4">Featured</th>
          <th className="text-left px-6 py-4">Active</th>
          <th className="text-left px-6 py-4">Created</th>
          <th className="text-right px-6 py-4">Actions</th>
        </tr>
      </thead>

      <tbody>
        {projects.map((project) => (
          <tr
            key={project.id}
            className="border-b border-border/50 hover:bg-white/5 transition-colors"
          >
            <td className="px-6 py-5">
              <div className="relative h-14 w-20 md:h-16 md:w-24 overflow-hidden rounded-lg">
                <Image
                  src={project?.thumbnail}
                  fill
                  alt={`${project.title} thubmnail`}
                />
              </div>
            </td>
            <td className="px-6 py-5">
              <div>
                <p className="font-medium">{project.title}</p>

                <p className="text-xs text-blue-50">{project.slug}</p>
              </div>
            </td>

            <td className="px-6 py-5">{project.category}</td>

            <td className="px-6 py-5">
              <FeaturedBadge featured={project.featured} />
            </td>

            <td className="px-6 py-5">
              <ActiveSwitch id={project.id} checked={project.isActive} />
            </td>

            <td className="px-6 py-5 text-blue-50">
              {new Date(project.createdAt).toLocaleDateString()}
            </td>

            <td className="px-6 py-5">
              <div className="flex justify-end gap-2">
                <button
                  className="
                    h-10 w-10
                    rounded-xl
                    bg-blue-100
                    hover:bg-primary
                    transition-colors
                    flex items-center justify-center
                  "
                  onClick={() => router.push(`projects/create/${project?.id}`)}
                >
                  <Pencil size={18} />
                </button>

                <button
                  className="
                    h-10 w-10
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                    hover:bg-red-500/20
                    transition-colors
                    flex items-center justify-center
                  "
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
