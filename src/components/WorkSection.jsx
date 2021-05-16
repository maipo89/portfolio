import React from "react"
import { ExternalLink } from 'react-external-link';

function WorkSection(props) {

    return (
        <div className="work-section">
           <h2>{props.title}</h2>
           <h3>{props.subtitle}</h3>
           <ul className="images-portfolio-container">
           {props.imgs.map((newImg, index) =>                
               <li key={index} className={ props.title === "Tutto Pepe front-end E-Commerce" ? "full-screen" : "version"}>
                  <h4>{newImg.title}</h4>
                  <img src={newImg.img} className="images-portfolio" alt="portfolio"></img>
               </li>)
            }
           </ul>
           <ExternalLink style={{ textDecoration: "none", margin: "30px 0" }}
                         href={props.link}>
                <p>Go to the Website</p>
           </ExternalLink>
           <h5>technologies</h5>
           <ul className="technologies">
           {props.technologies.map((tech, index) =>                
               <li key={index} className="tech-opt">
                    {tech}
               </li>)
            }
           </ul>
           <hr />
        </div>
    )
}

export default WorkSection