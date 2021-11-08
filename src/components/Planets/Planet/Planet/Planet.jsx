import React from 'react';
import { NavLink } from 'react-router-dom';
import { Capitalize } from '../../../../helpers/Capitalize';
import './Planet.css';

const Planet = ({ name, climate, population, id }) => {
    return (
        <NavLink className='planet' to={`/profile/${id}`}>
            <section>
                <div className={"planet__img"}>
                    <img className={"planet__photo"} src="https://dic.academic.ru/pictures/wiki/files/83/Star_Wars_Logo.svg" alt="" />
                </div>
                <h1>{name}</h1>
                <div className={"planet__climate"}>
                    <div className={"climate__title"}>
                        <b>Climate</b>
                    </div>
                    <div>
                        {
                            (climate !== 'unknown') ? Capitalize(climate) : "No information about climate"
                        }
                    </div>
                </div>
                <div className={"planet__population"} >
                    <div className={"population__title"}>
                        <b>Population</b>
                    </div>
                    <div>
                        {(population !== 'unknown') ? (population === "0") ? "No Population" : population : "No information"}
                    </div>
                </div>
            </section>
        </NavLink >

    )
}

export default Planet;