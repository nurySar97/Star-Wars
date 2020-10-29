import React from 'react';
import Planet from './Planet/Planet/Planet';
import './Planets.css';




const Planets = ({ planets, onPageChanged }) => {
    return (
        <div className="Planets">
            {
                planets.map(p => {
                    return (
                        <Planet
                            key={p.name}
                            name={p.name}
                            climate={p.climate}
                            population={p.population}
                        />
                    )
                })
            }
        </div>
    )
}




export default Planets;