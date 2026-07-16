import { Link } from "react-router-dom"

const ProjectCard = ({ title, image, description, link, modules }) => {
    const isLinkAvailable = link && link.trim() !== "";

    return (
        <div className="card h-100 shadow-sm border-0 bg-dark text-white">
            {isLinkAvailable ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} className="card-img-top object-fit-cover vh-25" alt={title} />
                </a>
            ) : (
                <Link to="/coming-soon">
                    <img src={image} className="card-img-top object-fit-cover vh-25" alt={title} />
                </Link>
            )}
            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div>
                    <h5 className="card-title fw-bold fs-5 mb-2">{title}</h5>
                    
                    {/* Render Module Pill Tags */}
                    <div className="d-flex flex-wrap gap-1 mb-3">
                        {modules && modules.map((mod, i) => (
                            <span key={i} className="badge bg-secondary text-light fw-normal" style={{ fontSize: '0.7rem' }}>
                                {mod}
                            </span>
                        ))}
                    </div>

                    <p className="card-text text-secondary small">{description}</p>
                </div>
                
                {isLinkAvailable ? (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary w-100 mt-3"
                    >
                        View Live Demo
                    </a>
                ) : (
                    <Link to="/coming-soon" className="btn btn-primary w-100 mt-3">
                        View Case Study
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;