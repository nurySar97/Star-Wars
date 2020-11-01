import React from 'react';
import { NavLink } from 'react-router-dom';
import { Capitalize } from '../../helpers/Capitalize';
import PreloaderJedy from '../Common/Preloader/PreloaderJedy/PreloaderJedy';
import './Profile.css';
import ProfileResidents from './ProfileResidents/ProfileResidents';
import ProfileRow from './ProfileRow/ProfileRow';



const Profile = ({
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residentsData,
    isLoaded }) => {
    let Climate = climate ? Capitalize(climate) : climate
    let Terrain = terrain ? Capitalize(terrain) : terrain
    return (
        <>
            <div className="profile">
                <div className="profile__container">
                    <NavLink to="/planets" className={"profile__backbtn"} >
                        <i className="far fa-arrow-alt-circle-left"></i>
                    </NavLink>
                    <div className="profile__title">
                        {name}
                    </div>
                    <table className="profile__table">
                        {ProfileRow('Rotation Period', rotation_period)}
                        {ProfileRow('Diameter', diameter)}
                        {ProfileRow('Climate', Climate)}
                        {ProfileRow('Gravity', gravity)}
                        {ProfileRow('Terrain', Terrain)}
                        {ProfileRow('Population', population)}
                    </table>
                    <div className="profile__residents">
                        Residents:
                    </div>
                    <div className="residents">
                        {
                            isLoaded ? <PreloaderJedy />
                                :
                                residentsData.length
                                    ?
                                    residentsData.map(a => {
                                        return <ProfileResidents key={a.name} {...a} />
                                    })
                                    :
                                    <div className="resident__alter">No Residents</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



export default Profile;