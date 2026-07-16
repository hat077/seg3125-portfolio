import ProjectCard from "./ProjectCard"
import pawsAndClawsVet from "../assets/paws-and-claws-vet.png"
import synapse from "../assets/synapse.png"
import goalMetrics from "../assets/goal-metrics.png"
import oraThreads from "../assets/ora-threads.png"

const Projects = () => {
    const projects = [
        {
            title: "Paws & Claws Veterinary Hospital",
            image: pawsAndClawsVet,
            description: "A dynamic React application featuring multi-persona workflows. Built with Bootstrap 5 to deliver a seamless client booking portal alongside a high-priority virtual triage queue for emergency intake processing.",
            link: "https://seg3125-assignment2-omega.vercel.app/",
            modules: ["UCD & Prototyping", "Goal-Oriented Interactions"]
        },
        {
            title: "Interactive Memory Game",
            image: synapse,
            description: "A dynamic, state-driven browser game utilizing clean visual feedback, responsive layouts, and engaging user interactions.",
            link: "https://seg3125-assignment3.vercel.app/",
            modules: ["Human Cognition", "UI/UX & Visual Comm."]
        },
        {
            title: "Modern E-commerce Interface",
            image: oraThreads,
            description: "A comprehensive digital storefront experience designed with a seamless checkout pipeline, clear product filtering, and conversion-optimized hierarchy.",
            link: "https://seg3125-assignment4.vercel.app/",
            modules: ["Usability Heuristics", "System Design"]
        },
        {
            title: "GoalMetrics Dashboard",
            image: goalMetrics,
            description: "A high-performance club statistics interface tracking top European leagues using full-width responsive chart layouts, customized tooltips, and real-time interactive player comparisons.",
            link: "https://seg3125-assignment5-lake.vercel.app/",
            modules: ["Visualization & Internationalization"]
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
                                modules={project.modules} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;