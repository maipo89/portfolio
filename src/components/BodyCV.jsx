import React from "react"

function BodyCV() {
    const frontEnd = ["HTML5" ,"CSS3" ,"Javascript" ,"jQuery" ,"Wordpress","Bootstrap" ,"React"]
    const backEnd = ["NodeJS", "Express", "MongoDB"]
    const versionControl = ["Git", "GitHub"]
    const modelling = ["3DStudio Max", "Rhinoceros", "Autocad"]
    const rendering = ["V-RAY", "Mental Ray"]

    return(
        <div className="skills">
            <h3>Skills</h3>

                    <h4>Web Development</h4>
                    <ul>
                        <li>
                            <h5>Front End Web Development</h5>
                            <div className="element-position">
                                {frontEnd.map((element) => (
                                    <div className="element"><p>{element}</p></div>
                                ))}
                            </div>
                        </li>
                        <li>
                            <h5>Back End Development</h5>
                            <div className="element-position">
                                {backEnd.map((element) => (
                                    <div className="element"><p>{element}</p></div>
                                ))}
                            </div>
                        </li>
                        <li>
                            <h5>Version Control</h5>
                            <div className="rendering-position">
                                {versionControl.map((element) => (
                                    <div className="element"><p>{element}</p></div>
                                ))}
                            </div></li>
                    </ul>

                    <h4>Modelling 3D / Product Design</h4>
                    <ul>
                        <li>
                            <h5>Object Modelling and Design</h5>
                            <div className="element-position">
                                {modelling.map((element) => (
                                    <div className="element"><p>{element}</p></div>
                                ))}
                            </div>
                        </li>
                    </ul>

                    <h4>Rendering</h4>
                    <ul>
                        <li>
                            <h5>3D Objects Rendering</h5>
                            <div className="rendering-position">
                                {rendering.map((element) => (
                                    <div className="element"><p>{element}</p></div>
                                ))}
                            </div>
                        </li>
                    </ul>

                    <h4>Graphic Design</h4>
                    <ul className="graphic-design">
                        <li>
                            <h5>Graphic Layout</h5>
                            <div className="element"><p>Illustrator</p></div>
                        </li>
                        <hr />
                        <li>
                            <h5>Photo Editing</h5>
                            <div className="element"><p>Photoshop</p></div>
                        </li>
                        <hr />
                        <li>
                            <h5>Video Editing</h5>
                            <div className="element"><p>Premiere</p></div>
                        </li>
                    </ul>
        </div>
    )
}

export default BodyCV