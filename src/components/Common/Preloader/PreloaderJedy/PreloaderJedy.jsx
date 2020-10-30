import React from 'react'
import jedy from './../../../../assets/images/Jedi.gif'
import './PreloaderJedy.css'

const PreloaderJedy = () => {
    return (
        <div className={"preloaderJedy"}>
            <img className={"preloaderJedy__img"} src={jedy} alt=""/>
        </div>
    )
}



export default PreloaderJedy