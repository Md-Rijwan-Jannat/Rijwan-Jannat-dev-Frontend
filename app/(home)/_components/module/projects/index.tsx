"use client";

import React from "react";
import { TProject } from "@/types";
import ProjectCard from "./projectCard";

interface TProjectProps {
  projects: TProject[];
}

const Project: React.FC<TProjectProps> = ({ projects }) => {
  return (
    <div
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-5"
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Project;
