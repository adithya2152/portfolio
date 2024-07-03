import React from 'react';
import { useParams } from 'react-router-dom';
import { projectDetails, cProjectsDetails } from '../projects';


type Params = {
  id: string;
  type: string;
};

export const Details: React.FC = () => {
  const { id, type } = useParams<Params>() as Params;
  const projectid = parseInt(id, 10);

  let allProjects = type === 'webdev' ? projectDetails : cProjectsDetails;

  return (
    <div>
             <div className='details_title'>
        <h1>{allProjects[projectid].title}</h1>
      </div>
      <div className='detailContainer'>
        <p>
          <strong>DESCRIPTION : </strong> <br />
          {allProjects[projectid].desc}
        </p>
        <p>
            <strong>Type Of Project :</strong>
            {allProjects[projectid].type === 'webdev' ? "WEB DEVELOPMENT" : "C/C++ PROJECTS"}
        </p>
        
        <div className='flex-p'>
          <p><strong>Tools and Technologies:</strong></p> 
          {allProjects[projectid].tools.map((tool, index) => (
            <p className='border' key={index}>{tool}</p>
          ))}
      </div>

          <p>
            <strong> Project Report:</strong>
            {allProjects[projectid].report ? <a href={allProjects[projectid].report} className="download-link1" download> Download Report</a> : "Report Not Available"}
          </p>
          
          <p>
            <strong>Source Code:</strong>
            {allProjects[projectid].git ? <a href={allProjects[projectid].git} className='download-link1'>GitHub</a> : "Source Code Not available "}
          </p>
        </div>
        
      <div className='videoPlayer'>
        <h2>Video Demo</h2>
        <video controls>
          <source src={allProjects[projectid].video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
