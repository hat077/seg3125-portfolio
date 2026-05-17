import { Link } from "react-router-dom"

const ProjectCard = ({ title, image, description }) => {
    return (
        <div className="card h-100 shadow-sm border-0 bg-dark text-white">
            <Link to="/coming-soon">
                <img src={image} className="card-img-top object-fit-cover vh-25" alt={title} />
            </Link>
            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <h5 className="card-title fw-bold fs-5">{title}</h5>
                <p className="card-text text-secondary">{description}</p>
                <Link to="/coming-soon" className="btn btn-primary w-100 mt-3">View Case Study</Link>
            </div>
        </div>
    )
}

export default ProjectCard