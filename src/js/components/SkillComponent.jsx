import { Fragment } from "react"


function SkillComponent(props) {
    return(
        <Fragment>
        <div className="skill col-6 col-lg-2">
            <h6>{props.skill}</h6>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewbox} fill='currentColor'><path d={props.path}></path> <path d={props.path1}></path></svg>
        </div>
        </Fragment>
    )
}



export default SkillComponent