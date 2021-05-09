import React from "react"

function Email(props) {

return (
         <div className="email">
            <p>{props.name}:</p>
            <div>
                <i>{props.icon}</i>
                <p>{props.contact}</p>
            </div>
         </div>
)
}

export default Email