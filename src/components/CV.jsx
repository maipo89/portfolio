import React from "react"
import HeaderCV from "./HeaderCV"
import BodyCV from "./BodyCV"
import ExperienceCV from "./ExperienceCV"
import EducationCV from "./EducationCV"

function CV() {

    return (
        <div>
            <div className="background-gray-cv">
                    
                <div className="background-cv">
                    <HeaderCV />
                    <BodyCV />
                    <ExperienceCV />
                    <EducationCV />

                </div>

            </div>
        </div>
    )
}

export default CV