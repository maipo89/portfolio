import React from "react"

function TimeSection(props) {

    return (
       <div className="time-section">
           <p>{props.year}</p>
           <div className="box"></div>
           <hr />
       </div>
    )
}

export default TimeSection