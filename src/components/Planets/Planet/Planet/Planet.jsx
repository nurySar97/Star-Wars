import React from 'react';
import './Planet.css';




const Planet = ({ name, climate, population }) => {
    return (
        <section className='Planet'>
            <h1>{name}</h1>
            <div>Climate: {climate} </div>
            <div>Population: {population}</div>
        </section>
    )
}



export default Planet;