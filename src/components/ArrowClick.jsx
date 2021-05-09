import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ArrowClick(props) {
    const icon = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div onClick={props.isClicked} className="click-here">
           <p>Click here</p>
           <i>{icon}</i>
        </div>
    )
}

export default ArrowClick