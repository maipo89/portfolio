import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Option(props) {
    const icon = <FontAwesomeIcon icon={faChevronRight} />
    
    const [isDesktop, setDesktop] = useState(window.innerWidth < 1000);
      
    const updateMedia = () => {
        setDesktop(window.innerWidth < 1000);
    };
      
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const [styleArrow, setStyleArrow] = useState({display: "none"});
    const [opacityMobile, setOpacityMobile] = useState({});

    const mouseEnter = (event) => { 
        setStyleArrow({display: "block"});
    }

    const mouseEnterMobile = (event) => { 
        setOpacityMobile({opacity: "100%"});
    }

    const mouseLeave = (event) => {
        setStyleArrow({display: "none"});
    }

    const mouseLeaveMobile = (event) => { 
        setOpacityMobile({opacity: "70%"});
    }

    const url = window.location.pathname.length === 1 ? null : window.location.pathname.substring(1);
    const matchUrlString = props.name.toLowerCase().includes(url);
    const blockArrow = {animation: "none", display: "block"}
    
    return (
        <li onClick={props.onClick}
            style={(matchUrlString && !isDesktop) ? {opacity: "100%"} : (isDesktop ? opacityMobile : null)}
            onMouseEnter={isDesktop ? mouseEnterMobile : mouseEnter} 
            onMouseLeave={isDesktop ? mouseLeaveMobile : mouseLeave}
        >
            <p>{props.name}</p>
            <i style={(matchUrlString && !isDesktop) ? blockArrow : styleArrow}>{icon}</i>
        </li>
    )
}

export default Option