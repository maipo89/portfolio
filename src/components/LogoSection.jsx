import React from "react"
import htmlLogo from "../images/html-logo.png"
import cssLogo from "../images/css-logo.png"
import javascriptLogo from "../images/javascript-logo.png"
import reactLogo from "../images/react-logo.png"
import bootstrapLogo from "../images/bootstrap-logo.png"
import jQueryLogo from "../images/j-query-logo.png"
import nodeLogo from "../images/node-logo.png"
import mongoLogo from "../images/mongo-logo.png"

function LogoSection() {

    return (
           <ul className="logos">
               <li><a href="https://reactjs.org/"><img src={htmlLogo} alt="html-logo"></img></a></li>
               <li><img src={cssLogo} alt="css-logo"></img></li>
               <li><img src={javascriptLogo} alt="javascipt-logo"></img></li>
               <li><img src={bootstrapLogo} alt="bootstrap-logo"></img></li>
               <li><img src={reactLogo} alt="react-logo"></img></li>
               <li><img src={nodeLogo} alt="node-logo"></img></li>
               <li><img src={jQueryLogo} alt="jquery-logo"></img></li>
               <li><img src={mongoLogo} alt="mongo-logo"></img></li>
           </ul>
    )
}

export default LogoSection