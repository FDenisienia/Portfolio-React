import '../css/projects.css'
import TituloComponent from "./components/TituloComponent"
import ProjectComponent from './components/ProjectComponent'

function Projects(){
    return(
        <div className="projects-container" id='projects'>

            <TituloComponent titulo="Projects"></TituloComponent>

            <section className="row projects">
                <ProjectComponent projectName="Rick and Morty App" created="Created with Javascript and Rick and Morty API" imgProject="https://i.ibb.co/HxfM3br/proyecto-rick.jpg" aProject="https://fdenisienia.github.io/Rick-Morty/"></ProjectComponent>
                <ProjectComponent projectName="Cotization App" created="Created with Javascript and Api Rest" imgProject="https://i.ibb.co/LZgsCZc/proyecto-cotizador.jpg" aProject="https://fdenisienia.github.io/Cotizador/"></ProjectComponent>
                <ProjectComponent projectName="Weather App" created="Created with ReactJs + Vite and Weather API" imgProject="https://i.ibb.co/ydKCFWT/proyecto-weather.jpg" aProject="https://fdenisienia-weather-app.netlify.app/"></ProjectComponent>
                <ProjectComponent projectName="E-commerce" created="Created with Javascript and Bootstrap" imgProject="https://i.ibb.co/C6Jp3pv/proyecto-la-plata.jpg" aProject="https://fdenisienia.github.io/la-plata-3d/"></ProjectComponent>
            </section>
                    
        </div>
    )
}

export default Projects