import React from 'react';
import './../ProfileResidents.css'



const ResidentInfo = ({ keyWord, value }) => {
    return (
        <div className="resident__information">
            <span className={"resident__value"}>
                {keyWord}:
            </span>
            <span className={"resident__key"}>
                {"unknown" === value ? "No information" : value}
            </span>
        </div>
    )
}



export default ResidentInfo;