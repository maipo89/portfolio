import React from "react"
import londonImage from "../images/Westminster.jpg"
import { Link } from "react-router-dom"

function Introduction(props) {

    const backgroundImage = {
           backgroundImage: `url(${londonImage})`
    }

    return (
        <div style={backgroundImage} className="introduction">
           <h1 style={props.moveText}>Hi, I'm Marco,</h1>
           <h2>a front end web developer with a background in graphic design</h2>

           <Link style={{ textDecoration: "none"}} to="/portfolio"><button>Portfolio</button></Link>
           <Link style={{ textDecoration: "none"}} to="/cv"><button onClick={props.onClick}>CV</button></Link>

        </div>
    )
}

export default Introduction