import React, { useState, useEffect } from "react"
import Introduction from "./Introduction"
import LeftSection from "./LeftSection"
import MobileVersion from "./MobileVersion"

function Home() {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 1000);
      
    const updateMedia = () => {
        setDesktop(window.innerWidth < 1000);
    };
      
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            
            {isDesktop ?  <MobileVersion />
                       : (<div>
                            <LeftSection/>
                            <Introduction />
                          </div>)}
        </div>
    )
}

export default Home