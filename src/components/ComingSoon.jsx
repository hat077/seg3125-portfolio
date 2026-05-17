import { Link } from "react-router-dom"

const ComingSoon = () => {
    return (
        <section id="coming-soon" className="container-fluid py-5 bg-dark text-white">
            <div className="container my-5 min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
                <i className="bi bi-hourglass-split display-1 mb-4 text-primary"></i>
                <h1 className="display-2 fw-bold pb-4 text-center">Coming Soon</h1>
                <p className="lead text-secondary max-width-md">
                    This section is currently under development for SEG3125. Check back soon for updates!
                </p>
                <Link to="/" className="btn btn-primary btn-lg mt-4 px-5 shadow-sm">Return to Home</Link>
            </div>
        </section>
    )
}

export default ComingSoon