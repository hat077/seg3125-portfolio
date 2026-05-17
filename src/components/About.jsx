import profilePic from '../assets/profile.jpg'

const About = () => {
    return (
        <section id="about" className="container-fluid py-5 bg-dark text-white">
            <div className="container">
                <div className="row pt-5 align-items-center">
                    <div className="col-sm-4">
                        <img src={profilePic} alt="Profile" className="img-fluid rounded-circle shadow w-75" />
                    </div>
                    <div className="col-md-7 offset-md-1">
                        <h1 className="display-2 fw-bold pb-4 text-start">About Me</h1>
                        <p className="lead text-start">
                            I am a Software Engineering student at the University of Ottawa
                            with a passion for building scalable, data-driven web applications and 
                            automated testing pipelines. Beyond coding, I enjoy exploring high-performance 
                            automotive engineering and staying active through sports. I am driven by the 
                            challenge of turning complex problems into clean, actionable digital results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About