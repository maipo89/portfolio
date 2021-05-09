import React from "react"
import Social from "./Social"
import Option from "./Option"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import profileImage from "../images/square-profile-pic.jpg"

function MenuSection(props) {
    const hamburgerMenu = <FontAwesomeIcon icon={faBars} />

    return (
        <div style={props.menuBar} className="menu-bar">
            <div className="social-bar">
                <Social />
                <i onClick={props.clicked}>{hamburgerMenu}</i>
            </div>
            <hr style={props.showItem}/>
            <div style={props.showItem} className="menu-section">
            <Link style={{ textDecoration: "none"}} to="/"><img src={profileImage} alt="profile"></img></Link>
                <ul>
                        <Link style={{ textDecoration: "none"}} to="/portfolio"><Option name="Portfolio" /></Link>
                        <Link style={{ textDecoration: "none"}} to="/contact"><Option name="Contact Me" /></Link>
                        <Link style={{ textDecoration: "none"}} to="/cv"><Option name="My CV" /></Link>
                        <Option className="about-me" onClick= {props.onClick} name="About Me" />
                </ul>
            </div>
        </div>
    )
}

export default MenuSection