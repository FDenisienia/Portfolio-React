import '../css/introduction.css'
import Contact from './Contact'
import Projects from './Projects'


function Introduction(){
    return(
        <section className="row introduction">
            <div className="col-12 col-md-6 col-lg-6 introduction-container p-1">
            <div className="col-12 col-lg-6 hs-introduction">
                <h2 className='introduction-h2'>Hi, im Federico</h2>
                <h4 className='introduction-h4'>Im a Front End Developer. </h4>
            </div>

            <div className="col-11 col-lg-6">
                <p className="text-light">
                    Front End Javascript developer. Prepared to face new challenges. I am an
                    Entrepreneur with a lot of initiative and responsibility. In the future I would like
                    become a Full Stack JS Developer.
                </p>
            </div>

            <div className="mt-3 col-12 col-lg-6 mt-2 mb-2">
                <a href="#projects" className="btn btn-danger p-2 me-3">View my projects</a>
                <a href="#contact" className="btn btn-danger p-2 me-3">Contact</a>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 introduction-container1 p-1">
                <img className='img-mine img-fluid border border-dark' src='./assets/foto-perfil.jpg' alt='imagen del programador Federico Denisienia'></img>
                <div className="fondo-img"></div>
            </div>
        </section>
    )
}


export default Introduction