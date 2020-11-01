import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import PreloaderJedy from '../Common/Preloader/PreloaderJedy/PreloaderJedy';
import Planet from './Planet/Planet/Planet';
import './Planets.css';




const Planets = ({ planets, onPageChanged, totalPlanetCount, currentPage, isFetching }) => {
    return (
        <div className={"Planets"}>
            <div className={"Planets__title"}>Stars</div>
            {
                isFetching && <PreloaderJedy />
            }
            <Paginator
                onPageChanged={onPageChanged}
                totalPlanetCount={totalPlanetCount}
                currentPage={currentPage}
            />
            <div className={"Planets__container"}>
                {
                    planets.map(p => {

                        if (p.name === 'unknown') {
                            return ""
                        }
                        return (
                            <Planet
                                key={p.url.split("/")[5]}
                                name={p.name}
                                climate={p.climate}
                                population={p.population}
                                id={p.url.split("/")[5]}
                            />
                        )
                    })
                }
            </div>
            <Paginator
                onPageChanged={onPageChanged}
                totalPlanetCount={totalPlanetCount}
                currentPage={currentPage}
            />
        </div>
    )
}




export default Planets;