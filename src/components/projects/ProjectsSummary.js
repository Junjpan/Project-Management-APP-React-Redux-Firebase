import React from "react";


const ProjectsSummary = ({project}) => {
  return (
    <div className='card grey lighten-2 z-depth-1 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>{project.authorFirstName} {project.authorLastName}</p>
        <p className='grey-text'>{project.createdAt.toDate().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

//toLocaleString(),change date object to a time string with date and time. '12/23/2008 9:28:20'
//toLocaleDateString().change date object to a date only '12/23/2008'
//toDateString(),change date object to a date string with format like 'Sun Dec 23 2008'
export default ProjectsSummary;
