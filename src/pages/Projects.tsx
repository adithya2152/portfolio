import { Nav } from "../components/Header"
import { Card } from "../components/ProjectCard"
import { projectDetails , cProjectsDetails} from "../projects"
export const Projects = ()=>{


   return(
    <div>
        <Nav/>
        <div className="title">
            <p>PROJECTS</p>
        </div>
        <div className="subtitle">
            <p>WEB-DEVELOPMENT</p>
            
        </div>
        
        <div className="grid">
            {projectDetails.map((details) => (
                <Card title={details.title} desc = {details.desc} tools={details.tools} img={details.img} git={details.git}/>
            ))}
        </div>

        <div className="subtitle">
            <p>C/C++ PROJECTS</p>
        </div>

        <div className="grid">
            {cProjectsDetails.map((detail)=>(
                <Card title={detail.title} desc={detail.desc} tools={detail.tools} img={detail.img} git = {detail.git}/>
            ))}
        </div>
    </div>
   )
}