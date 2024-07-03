
import { Card } from "../components/ProjectCard";
import { projectDetails, cProjectsDetails } from "../projects";

 

export const Projects = ()=> {
  return (
    <div>
    
      <div className="title">
        <p>PROJECTS</p>
      </div>
      <div className="subtitle">
        <p>WEB-DEVELOPMENT</p>
      </div>

      <div className="grid">
        {projectDetails.map((detail, index) => (
          <Card
            key={index}
            id={index}
            title={detail.title}
            desc={detail.desc}
            tools={detail.tools}
            img={detail.img}
            git={detail.git}
            type={detail.type}
            
          />
        ))}
      </div>

      <div className="subtitle">
        <p>C/C++ PROJECTS</p>
      </div>

      <div className="grid">
        {cProjectsDetails.map((detail, index) => (
          <Card
            key={index}
            id={index}
            title={detail.title}
            desc={detail.desc}
            tools={detail.tools}
            img={detail.img}
            git={detail.git}
            type={detail.type}
             
          />
        ))}
      </div>
    </div>
  );
}
