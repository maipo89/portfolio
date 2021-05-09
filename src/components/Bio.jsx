import React from "react"
import LogoSection from "./LogoSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function Bio(props) {
    const iconEdit = <FontAwesomeIcon icon={faEdit} />

    return (
        <div style={props.bio} className="bio">
           <span style={props.content}>
                <div className="title-bio">
                    <i>{iconEdit}</i>
                    <h1>About Me</h1>
                </div>
                <p>After my classical lyceum studies, I obtained a qualification as <span className="red-word">Graphic Designer</span> at Italian Institute of Design in Perugia. Then, I worked as a freelancer and content creator (video editing), collaborating with companies and design firms, as well as mainly focusing on the realisation of 3D photorealistic renderings for both interior and exterior residential buildings.</p>
                <p>After a specialisation in Architectural Visualisation at La Sapienza University in Rome, I moved to London, where I took an interest in the technology sector. In the British capital, after attending a course in <span className="black-word">Front-End Web Development</span> at <span className="red-word">“General Assembly London”</span>, I started to work in the IT sector as a Junior Front End Web Developer. To the present day, I'm continuing my training deepening new programmes languages, particularly <span className="red-word">Javascript</span><span className="black-word"> and its framework React.</span></p>
                <hr/>
                <div className="title-bio">
                    <i>{iconEdit}</i>
                    <h1>My Skills</h1>
                </div>
                <LogoSection/>
           </span>
        </div>
    )
}

export default Bio