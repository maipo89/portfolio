import React, { useState, useEffect } from "react"
import Social from "./Social"
import Option from "./Option"
import Bio from "./Bio"
import ArrowClick from "./ArrowClick"
import profileImage from "../images/marco-image.png"
import { Link } from "react-router-dom"

function LeftSection(props) {
    const [clicked, setClicked] = useState(false);
    const [leftSection, setLeftSection] = useState({});
    const [opacitySection, setOpacitySection] = useState({});
    const [showBio, setShowBio] = useState({});
    const [hideContent, setHideContent] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBio(clicked ?
                {transition: "all ease-in 1s",
                webkitTransition: "all ease-in 1s",
                top: "0px", opacity: "1"}
               : {transition: "all ease-in 0.5s",
               webkitTransition: "all ease-in 0.5s",
               top: "-700px", opacity: "0"}
            );
        }, 400);
        return () => clearTimeout(timer);
    }, [showBio]);

    function moveSection() {
        setClicked(!clicked)
        setOpacitySection(clicked ?
                         {backgroundColor: "rgba(145,13,13,0.8"} 
                         : {backgroundColor: "rgba(145,13,13,1)"})
        setLeftSection(clicked ?
                        {transition: "all 1s",
                        webkitTransition: "all 1s",
                               left: "0px",
                          animation: "move-section ease-in 1s", opacity: opacitySection,} 
                       : 
                       {transition: "all 1s",
                       webkitTransition: "all 1s",
                              left: "700px",
                         animation: "move-section ease-in 1s", opacity: opacitySection})
        setHideContent(clicked ? {display: "none"} : {display: "block"})
        setClicked(!clicked)
    }

    return (
        <div>
                <Bio bio={showBio} content={hideContent}/>
                <div style={{...leftSection,...opacitySection}} className="left-section">
                {props.arrow === "hide-arrow" ? null : <ArrowClick isClicked= {() => {moveSection()}}/> }
                <Link style={{ textDecoration: "none"}} to="/"><img className="profile-image" src={profileImage} alt="profile"></img></Link>
                <h1>Marco Brunetti</h1>
                <h2>Front End Web Developer</h2>
                <ul>
                            <Link style={{ textDecoration: "none"}} to="/portfolio"><Option name="Portfolio" /></Link>
                            <Link style={{ textDecoration: "none" }} to="/contact"><Option name="Contact Me" /></Link>
                            <Link style={{ textDecoration: "none" }} to="/cv"><Option name="My Cv" /></Link> 
                        <li className="get-in-touch">Get In Touch</li>
                    </ul>
                    <Social />
                </div>
        </div>
    )
}

export default LeftSection