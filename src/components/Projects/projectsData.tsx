import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Steel Factory Expansion",
    description:
      "Expansion of the main steel factory with new production lines and modern facilities.",
    images: [
      "/images/blog/blog-01.jpg",
      "/images/blog/blog-02.jpg",
      "/images/blog/blog-03.jpg",
    ],
  },
  {
    id: 2,
    title: "Warehouse Construction",
    description:
      "Construction of a large-scale warehouse for logistics and storage.",
    images: ["/images/blog/blog-02.jpg", "/images/blog/blog-03.jpg"],
  },
  {
    id: 3,
    title: "Office Building Renovation",
    description:
      "Complete renovation of a multi-story office building in the city center.",
    images: ["/images/blog/blog-03.jpg"],
  },
];

export default projectsData;
