import AddProjects from "@/components/Admin/Projects/AddProjects";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const projectData = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  return (
    <>
      <AddProjects projectData={projectData} />
    </>
  );
};

export default page;
