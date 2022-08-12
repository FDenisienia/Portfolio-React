import { Fragment } from "react"

function ProjectComponent(props){

    return(
        <Fragment>
        <div className="project-container col-12 col-md-6 col-lg-3 p-4 d-flex flex-column align-items-center justify-content-center">
            <h3 className="project-h3 text-center" id="project-h3">{props.projectName}</h3>
            <h6 className="project-h6 text-center w-50">{props.created}</h6>
            <img src={props.imgProject} className="img-fluid img-project" id="img-project" ></img>
            <a href={props.aProject} className="btn btn-danger btn-demo" target="_blankw-50">View Demo</a>
        </div>
        </Fragment>
    )
}

export default ProjectComponent


