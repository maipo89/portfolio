import React, { useState, useEffect } from "react"
import LeftSection from "./LeftSection"
import westminster from "../images/london.jpg"
import MobileVersion from "./MobileVersion"
import PortfolioSection from "./PortfolioSection.jsx"

function Portfolio() {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 1000);
      
    const updateMedia = () => {
        setDesktop(window.innerWidth < 1000);
    };
      
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const backgroundImage = {
        backgroundImage: `url(${westminster})`
    }

    return (
        <div>

           {isDesktop ?  
           <MobileVersion />
           : 
           (
           <div>
                <LeftSection arrow= {"hide-arrow"} />
                <div style={backgroundImage} className="image-london"></div>
                <PortfolioSection />
           </div>
           )}
        </div>
    )
}

export default Portfolio