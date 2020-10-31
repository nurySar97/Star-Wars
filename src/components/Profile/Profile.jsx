import React from 'react';
import { Capitalize } from '../../helpers/Capitalize';
import './Profile.css';
import ProfileRow from './ProfileRow/ProfileRow';



const Profile = ({
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents }) => {
        let Climate = climate ? Capitalize(climate) : climate
        let Terrain = terrain ? Capitalize(terrain) : terrain
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__title">
                    {name}
                </div>
                <table className="profile__table">
                    {ProfileRow('Rotation Period', rotation_period)}
                    {ProfileRow('Diameter', diameter)}
                    {ProfileRow('Climate', Climate)}
                    {ProfileRow('Gravity', gravity)}
                    {ProfileRow('Terrain', Terrain)}
                    {ProfileRow('Population',population)}
                </table>
            </div>
        </div>
    )
}



export default Profile;