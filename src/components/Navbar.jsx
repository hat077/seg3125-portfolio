const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand fs-2 fw-bold" href="/">Hatim Oudghiri</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#workflow">Workflow</a>
                    </li>
                    <li className="nav-item fs-5">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar