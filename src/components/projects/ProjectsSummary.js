import React from "react";


const ProjectsSummary = ({project}) => {
  return (
    <div className='card grey lighten-2 z-depth-1 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>{project.authorFirstName} {project.authorLastName}</p>
        <p className='grey-text'>24th April,2020</p>
      </div>
    </div>
  );
};

export default ProjectsSummary;
