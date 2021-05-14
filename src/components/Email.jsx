import React from "react"

function Email(props) {

return (
         <div className="email">
            <p>{props.name}:</p>
            <div>
                <i>{props.icon}</i>
                <a style={{textDecoration: "none"}} href={ props.name === "Email" ? `mailto:${"marcobrunettivo@gmail.com"}` : (props.name === "LinkedIn" ? "https://www.linkedin.com/in/marco-brunetti-147a6948/" : "https://github.com/maipo89")}><p>{props.contact}</p></a>
            </div>
         </div>
)
}

export default Email