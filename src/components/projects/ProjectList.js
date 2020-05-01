import React from "react";
import ProjectsSummary from "./ProjectsSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects &&
        projects.map((project) => {
          return (
            <Link  key={project.id} to={"/project/" + project.id}>
              <ProjectsSummary  project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
