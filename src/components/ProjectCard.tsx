type cardprops = {
    title : string,
    desc : string,
    img : string,
    git:string,
    tools:string[]
}

export const Card = (props : cardprops)=>{

    return(
            <div className="card">
               <img src={props.img} alt="" />
                <div className="project-details">
                    <p> <span>{props.title}</span></p>
                    <p>{props.desc}</p>
                </div>

                <div className="hoveredDisplay">
                    <p>Tools and Technologies used </p>
                    {props.tools.map((tool)=> (
                        <ul>
                            <li>{tool}</li>
                        </ul>
                    ))}
                    <div className="buttons">
                    <a href={props.git}>GitHub</a>
                    <a href="#">More Details</a>
                    </div>  
                </div>
            </div>
    )
}