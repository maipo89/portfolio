import React, {useState} from "react"
import MenuSection from "./MenuSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Bio from "./Bio"
import PortfolioSection from "./PortfolioSection"
import Introduction from "./Introduction"
import ContactSection from "./ContactSection"

function MobileVersion() {

        const iconClose = <FontAwesomeIcon icon={faTimes} />

        const [clicked, setClicked] = useState(false);
        const [menuBar, setMenuBar] = useState({})
        const [showItem, setShowItem] = useState({})
        const [moveText, setMoveText] = useState({})
        const [moveTextAbout, setMoveTextAbout] = useState({})
        const [showMobileBio, setShowMobileBio] = useState({})
        const [opacitySection, setOpacitySection] = useState({});

        function showBio() {
                setShowMobileBio({display: "block"})
        }

        function hideBio() {
                setShowMobileBio({display: "none"})
        }

        function showSection() {
                setClicked(!clicked);
                setMenuBar( clicked ?
                        {height: "40px", transition: "all ease-in 0.2s"} :
                        {height: "213px", transition: "all ease-in 0.2s"});
                setShowItem(clicked ? {display: "none"} : {display: "flex", opacity: "1", transition: "all 0.4s"})
                setMoveText(clicked ? {marginTop: "130px"} : {marginTop: "250px"})
                setMoveTextAbout(clicked ? {marginTop: "20px"} : {marginTop: "200px"})
                setOpacitySection(clicked ?
                        {backgroundColor: "rgba(145,13,13,0.8"} 
                        : {backgroundColor: "rgba(145,13,13,1)"})
        }

return (

     <div>
        <MenuSection showItem= {showItem} 
            menuBar= {menuBar}
            clicked = {() => {showSection()}} 
            onClick= {() => {showBio()}}
            opacity= {opacitySection}
        />
        <div style={showMobileBio} className="opacity-black"></div>
        <Bio bio={showMobileBio}/>
        <i style={showMobileBio} 
            className="close-icon" 
            onClick= {() => {hideBio()}}
            >
            {iconClose}
        </i>
        { window.location.pathname === "/" ?
            (<Introduction onClick= {() => {showBio()}} moveText={moveText}/>) : 
            ( window.location.pathname === "/portfolio" ? (<PortfolioSection moveText={moveTextAbout}/>) : (
                window.location.pathname === "/contact" ? (<ContactSection moveText={moveTextAbout}/>) : null)
            )}
     </div>
)

}

export default MobileVersion