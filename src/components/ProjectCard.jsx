import { Link } from "react-router-dom"

const ProjectCard = ({ title, image, description, link }) => {
    return (
        <div className="card h-100 shadow-sm border-0 bg-dark text-white">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} className="card-img-top object-fit-cover vh-25" alt={title} />
            </a>
            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <h5 className="card-title fw-bold fs-5">{title}</h5>
                <p className="card-text text-secondary">{description}</p>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100 mt-3"
                >
                    View Case Study
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;