import { useState, useEffect } from "react"

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false) 
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNow = () => {
        console.log('button')
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return() => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return(
        <nav>
            <ul className="list2">
                <li className="logo">C // A</li>
            </ul>
            {(toggleMenu || screenWidth > 500) && (
            <div>
                <ul className="list">
                    <li className="item">Home</li>
                    <li className="item">About me</li>
                    <li className="item">Projects</li>
                    <li className="item">CV</li>
                </ul>
            </div>
            )}
            <button onClick={toggleNow} className="btn">BTN</button>
        </nav>
    )
}

export default NavBar