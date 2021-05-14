import React from "react"

function TimeSection(props) {

    return (
       <div className="time-section">
           <p>{props.year}</p>
           <div className="box"></div>
           <div className="line-gradient"></div>
       </div>
    )
}

export default TimeSection