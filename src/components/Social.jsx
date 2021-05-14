import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGitSquare } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

function Social() {

    const iconMail = <FontAwesomeIcon icon={faEnvelope} />
    const iconLinkedin = <FontAwesomeIcon icon={faLinkedinIn} />
    const iconGitHub = <FontAwesomeIcon icon={faGitSquare} />

    function onClick() {
        window.location.href = `mailto:${"marcobrunettivo@gmail.com"}`;
    }

    return (
        <div className="contact-container">
            <i onClick= {onClick}  className="contact">{iconMail}</i>
            <a style={{ textDecoration: "none"}} href="https://www.linkedin.com/in/marco-brunetti-147a6948/"><i className="contact">{iconLinkedin}</i></a>
            <a style={{ textDecoration: "none"}} href="https://github.com/maipo89"><i className="contact">{iconGitHub}</i></a>
        </div>
    )
}

export default Social