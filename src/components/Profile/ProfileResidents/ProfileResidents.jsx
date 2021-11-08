import React, { useState } from 'react';
import './ProfileResidents.css'
import { Collapse } from 'react-collapse';
import { Capitalize } from '../../../helpers/Capitalize';
import ResidentInfo from './ResidentInfo/ResidentInfo';

const ProfileResidents = props => {
    const [showResidentInfo, setResidentInfo] = useState([])
    const onOpenHandleClick = name => {
        setResidentInfo([...showResidentInfo, name])
    }

    const onCloseHandleClick = name => {
        setResidentInfo(showResidentInfo.filter(a => a !== name))
    }
    return (
        <div key={props.name} className="resident">
            <h1>{props.name}</h1>

            {
                showResidentInfo.includes(props.name)
                    ?
                    <button onClick={() => onCloseHandleClick(props.name)} className="resident__btn">Close</button>
                    :
                    <button onClick={() => onOpenHandleClick(props.name)} className="resident__btn">Read More...</button>

            }

            <Collapse isOpened={showResidentInfo.includes(props.name)}>
                <div className="resident__informations">
                    {
                        Object.keys(props).map(a => {
                            if (
                                a === 'created'
                                || a === 'edited'
                                || a === 'films'
                                || a === 'homeworld'
                                || a === 'species'
                                || a === 'starships'
                                || a === 'url'
                                || a === 'vehicles'
                            ) {
                                return undefined
                            }
                            let keyWord = Capitalize(a.split("_").join(" "))
                            return <ResidentInfo key={a} keyWord={keyWord} value={props[a]} />
                        })
                    }
                </div>
            </Collapse>
        </div>
    )
}

export default ProfileResidents