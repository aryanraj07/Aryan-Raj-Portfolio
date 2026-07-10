import AddProjects from "@/components/Admin/Projects/AddProjects";
import prisma from "@/lib/prisma";

export default async function ProjectDetalSinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectData = await prisma.project.findUnique({ where: { id } });
  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <AddProjects projectData={projectData} />
    </div>
  );
}
