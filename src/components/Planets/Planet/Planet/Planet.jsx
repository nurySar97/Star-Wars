import React from 'react';
import './Planet.css';




const Planet = ({ name, climate,population }) => {
    return (
        <div className='Planet'>
            <div>Name Planet: {name}</div>
            <div>Climate: {climate} </div>
            <div>Population: {population}</div>
        </div>
    )
}



export default Planet;