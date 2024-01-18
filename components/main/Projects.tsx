import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectsData } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-[50%] w-full grid grid-flow-col md:grid-flow-row md:grid-cols-4 gap-6 px-6">
        {ProjectsData.map((project) => {
          return (
            <ProjectCard
              src={project.src}
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
