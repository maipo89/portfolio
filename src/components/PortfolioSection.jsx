import React from "react"
import TimeSection from "./TimeSection"
import WorkSection from "./WorkSection"
import data from "./data"

function PortfolioSection(props) {

    return (
            <div className="portfolio">
                    <h1 style={props.moveText}>Portfolio</h1>
                    <p className="text-subtitle">See my works below. Unless explicitly stated otherwise, <strong>all their front-end parts were completely done by me from scratch.</strong></p>
                    <ul>
                    {data.map((newProject, index) => 
                        <li key={index} className="project">
                        <TimeSection year= {newProject.year}/>
                        <WorkSection title= {newProject.title} 
                                        subtitle= {newProject.subtitle}
                                        imgs= {newProject.imgs}
                                        technologies= {newProject.technologies}
                                        link= {newProject.link}
                                        />
                        </li>)}
                    </ul>
                </div>
    )
}

export default PortfolioSection