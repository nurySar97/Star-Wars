import React, { useState } from 'react';
import './ProfileResidents.css'
import { Collapse } from 'react-collapse';



const ProfileResidents = ({ name, birth_year, eye_color, gender, hair_color, height, mass, skin_color }) => {
    const [showResidentInfo, setResidentInfo] = useState([])
    const onOpenHandleClick = name => {
        setResidentInfo([...showResidentInfo, name])
    }

    const onCloseHandleClick = name => {
        setResidentInfo(showResidentInfo.filter(a => a !== name))
    }
    return (
        <div key={name} className="resident">
            <h1>{name}</h1>

            {
                showResidentInfo.includes(name)
                    ?
                    <button onClick={() => onCloseHandleClick(name)} className="resident__btn">Close</button>
                    :
                    <button onClick={() => onOpenHandleClick(name)} className="resident__btn">Read More...</button>

            }

            <Collapse isOpened={showResidentInfo.includes(name)}>
                <div className="resident__informations">
                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Birth Year:
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === birth_year ? "No information" : birth_year}
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Eye Color:
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === eye_color ? "No information" : eye_color }
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Gender: 
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === gender ? "No information" : gender}
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Hair Color:
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === hair_color ? "No information" : hair_color }
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Height: 
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === height ? "No information" : height}
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Mass: 
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === mass ? "No information" : mass}
                        </span>
                    </div>

                    <div className="resident__information">
                        <span className={"resident__value"}>
                            Skin Color: 
                        </span>
                        <span className={"resident__key"}>
                            {"unknown" === skin_color ? "No information" : skin_color}
                        </span>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}



export default ProfileResidents