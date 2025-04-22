import Breadcrumb from "@/components/Common/Breadcrumb";
import projectsData from "@/components/Projects/projectsData";
import SingleProject from "@/components/Projects/SingleProject";

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Projects" description="Explore our recent projects, including construction, renovation, and industrial works." />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
              >
                <SingleProject project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
