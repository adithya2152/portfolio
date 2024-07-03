
import { Skillc } from "../components/SkillsContainer"
import { skillset , tools} from "../skills"
export const Skill = ()=>{

    
    return(
        <div>
         

            <div className="title">
                <p>SKILLS</p>
            </div>

            <div className="subtitle">

                 <p>Professional Skills</p>
                
            </div>

            <div className="flex">
                {skillset.map((skill)=>(
                    <Skillc img = {skill.img} name = {skill.name}/>
                ))}
            </div>


            <div className="subtitle">

                <p>Tools Used</p>
                
            </div>

            <div className="flex">
                {tools.map((tool)=>(
                    <Skillc img = {tool.img} name = {tool.name}/>
                ))}
            </div>



        </div>
    )
}