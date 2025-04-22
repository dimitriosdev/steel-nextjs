import { Project } from "@/types/project";
import projectsData from "@/components/Projects/projectsData";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id.toString() }));
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  if (!project)
    return <div className="p-8 text-center">Project not found.</div>;
  return (
    <div className="container py-16">
      <Breadcrumb
        pageName={project.title}
        levelUpPageName="Projects"
        description=""
      />
      {/* <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
        {project.title}
      </h1> */}
      <p className="text-body-color dark:text-body-color-dark mb-8 pt-4 text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-4">
        {project.images.map((img, idx) => (
          <div
            key={idx}
            className="relative h-64 w-96 max-w-full overflow-hidden rounded border"
          >
            <Image
              src={img}
              alt={project.title + " " + (idx + 1)}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
