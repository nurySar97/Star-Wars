import React from 'react';
import Planet from './Planet/Planet/Planet';
import './Planets.css';




class Planets extends React.Component {
    render() {
        return (
            <div className="Planets">
                <Planet />
            </div>
        )
    }
}



export default Planets;