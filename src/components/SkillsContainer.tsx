type skillProp = {
    img : string
    name :string
}

export const Skillc = (props : skillProp)=>{
    return(
            <div className="skillBox">
                <img src={props.img} alt="" />
                <div className="hoveredDisplay">
                    <h2>{props.name}</h2>
                </div>
            </div>
    )
}