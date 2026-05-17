const Workflow = () => {
    return (
        <section id="workflow" className="container-fluid py-5 bg-dark text-white">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8">
                        <h1 className="display-2 fw-bold pb-4 text-start">How I Work</h1>
                        <p className="lead">
                            My professional workflow is rooted in Agile principles, 
                            bridging the gap between high-performance backend engineering 
                            and user-centered design. I focus on turning complex technical 
                            requirements into clean, actionable, and thoroughly tested digital results.
                        </p>
                    </div>
                </div>

                <div className="row g-4 text-start">
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow-sm rounded h-100">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-cpu fs-1 me-3"></i>
                                <h3 className="fw-bold fs-2">01. Architecture</h3>
                            </div>
                            <p>Drawing from my background in software engineering, I approach projects 
                                starting with robust system architecture and database design. I 
                                specialize in building scalable full-stack applications using 
                                Python and JavaScript, ensuring that the underlying logic is as 
                                efficient as the interface is functional.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow-sm rounded h-100">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-check2-circle fs-1 me-3"></i>
                                <h3 className="fw-bold fs-2">02. Development</h3>
                            </div>
                            <p>A critical phase of my process is rigorous Quality Assurance. I 
                                engineer automated UI testing pipelines using Playwright and 
                                TestComplete to identify bugs early in the lifecycle. This ensures 
                                that every deployment meets federal-level standards for stability, 
                                security, and functional integrity.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow-sm rounded h-100">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-palette fs-1 me-3"></i>
                                <h3 className="fw-bold fs-2">03. UI/UX & QA</h3>
                            </div>
                            <p>I am currently a student in the SEG3125: Analysis and Design of User 
                                Interfaces course at the University of Ottawa. My methodology now 
                                incorporates user-centered design and heuristic evaluation, 
                                utilizing industry-leading research from the Nielsen Norman 
                                Group (NN/g) to create intuitive and accessible interfaces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workflow