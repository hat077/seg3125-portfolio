import Navbar from './Navbar'
import About from './About'
import Workflow from './Workflow'
import Projects from './Projects'

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="about">
                <About />
            </div>
            <div id="workflow">
                <Workflow />
            </div>
            <div id="projects">
                <Projects />
            </div>
        </>
    )
}

export default Home