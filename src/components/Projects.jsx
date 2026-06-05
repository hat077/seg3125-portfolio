import ProjectCard from "./ProjectCard"
import vetHospital from "../assets/vet-hospital.png"
import memoryGame from "../assets/memory-game.png"
import analyticsDashboard from "../assets/analytics.jpg"
import ecommerce from "../assets/e-commerce.png"

const Projects = () => {
    const projects = [
        {
            title: "Paws & Claws Veterinary Hospital",
            image: vetHospital,
            description: "A dynamic React application featuring multi-persona workflows. Built with Bootstrap 5 to deliver a seamless client booking portal alongside a high-priority virtual triage queue for emergency intake processing.",
            link: "https://seg3125-assignment2-omega.vercel.app/"
        },
        {
            title: "Interactive Memory Game",
            image: memoryGame,
            description: "A dynamic, state-driven browser game utilizing clean visual feedback, responsive layouts, and engaging user interactions.",
            link: ""
        },
        {
            title: "Modern E-commerce Interface",
            image: ecommerce,
            description: "A comprehensive digital storefront experience designed with a seamless checkout pipeline, clear product filtering, and conversion-optimized hierarchy.",
            link: ""
        },
        {
            title: "Data Visualization Dashboard",
            image: analyticsDashboard,
            description: "A high-performance analytics interface tracking metrics (like sports simulation data or BI insights) using clear chart layouts and scannable visual indicators.",
            link: ""
        }
    ]

    return (
        <section id="projects" className="container-fluid py-5 bg-dark text-white">
            <div className="container my-5">
                <h1 className="display-2 fw-bold pb-4 text-start">Case Studies</h1>
                <div className="row g-4 align-items-stretch">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-3 d-flex" key={index}>
                            <ProjectCard 
                                title={project.title} 
                                image={project.image} 
                                description={project.description} 
                                link={project.link} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;