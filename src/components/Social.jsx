import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGitSquare } from "@fortawesome/free-brands-svg-icons"

function Social() {

    const iconMail = <FontAwesomeIcon icon={faEnvelope} />
    const iconLinkedin = <FontAwesomeIcon icon={faLinkedinIn} />
    const iconGitHub = <FontAwesomeIcon icon={faGitSquare} />

    return (
        <div className="contact-container">
            <i className="contact">{iconMail}</i>
            <i className="contact">{iconLinkedin}</i>
            <i className="contact">{iconGitHub}</i>
        </div>
    )
}

export default Social