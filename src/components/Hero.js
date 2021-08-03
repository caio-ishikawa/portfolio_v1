import NavBar from "./NavBar"

const Hero = () => {

    return(
        <div>
            <NavBar/>
            <div clasName="container">
                <br></br>
                <h1 className="hero">I am Caio, a fullstack developer </h1>
                <div className="links">
                    <button href="#" className="link">GitHub</button>
                    <button href="#" className="link">CV</button>
                </div>
            </div>
        </div>
    )
}

export default Hero