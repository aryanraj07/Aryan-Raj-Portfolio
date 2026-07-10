import DataTable from "@/components/Admin/DataTable";
import ProjectListings from "@/components/Admin/Projects/ProjectListings";
import ProjectTable from "@/components/Admin/Projects/ProjectTable";
import Button from "@/components/Button";
import prisma from "@/lib/prisma";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const projects = await prisma.project.findMany();

  return (
    <>
      {/* <Button onClick={() => router.push("/admin/projects/create")}>
        <Plus size={16} /> Add Project
      </Button> */}
      <DataTable
        title="Projects"
        action={
          <Link href="/admin/projects/create">
            <Button>+ New Project</Button>
          </Link>
        }
      >
        <ProjectTable projects={projects} />
      </DataTable>
      {/* <ProjectListings projects={projects} /> */}
    </>
  );
}
