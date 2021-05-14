import React from "react"

function HeaderCV(){

    function onClick() {
        window.location.href = `mailto:${"marcobrunettivo@gmail.com"}`;
    }

    return (     
    <div className="header-cv">              
        <div>
            <h3>39 Arrowsmith House, Tyers Street, SE115HB, London, UK</h3>
            <ul>
                <a style={{ textDecoration: "none"}} href="https://marcobrunetti.com/"><li>www.marcobrunetti.com</li></a>
                <li onClick={onClick}>marcobrunettivo@gmail.com</li>
                <a style={{ textDecoration: "none"}} href="https://github.com/maipo89"><li>linkedin.com/marco-brunetti</li></a>
            </ul>
        </div>
        <h1>Marco Brunetti</h1>
        <h2>Front End Web Developer</h2>
        <hr />
    </div> )
}

export default HeaderCV