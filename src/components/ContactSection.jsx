import React from "react"
import Email from "./Email"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function ContactSection(props) {

const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />

return (
    <div>
        <div className="contact-section">
            <h1 style={props.moveText}>Contact</h1>
            <Email name="Email"
                    icon={mailIcon}
                    contact="marcobrunettivo@gmail.com"/>
            <Email name="LinkedIn"
                    icon={linkedInIcon}
                    contact="linkedin.com/marco-brunetti"/>
            <Email name="Github"
                    icon={githubIcon}
                    contact="https://github.com/maipo89"/>
        </div>
        <div className="gray-section"></div>
     </div>
)

}

export default ContactSection