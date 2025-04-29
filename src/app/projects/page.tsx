import Breadcrumb from "@/components/Common/Breadcrumb";
import projectsData from "@/components/Projects/projectsData";
import SingleProject from "@/components/Projects/SingleProject";

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Projects" />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="mb-8 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
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
