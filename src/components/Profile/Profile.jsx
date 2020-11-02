import React from 'react';
import { NavLink } from 'react-router-dom';
import { Capitalize } from '../../helpers/Capitalize';
import PreloaderJedy from '../Common/Preloader/PreloaderJedy/PreloaderJedy';
import './Profile.css';
import ProfileResidents from './ProfileResidents/ProfileResidents';
import ProfileRow from './ProfileRow/ProfileRow';



const Profile = props => {
    return (
        <>
            <div className="profile">
                <div className="profile__container">
                    <NavLink to="/planets" className={"profile__backbtn"} >
                        <i className="far fa-arrow-alt-circle-left"></i>
                    </NavLink>
                    <div className="profile__title">
                        {props.name}
                    </div>
                    <table className="profile__table">
                        {
                            !!props.climate
                            && Object.keys(props).map(element => {
                                if (
                                    element === 'isLoaded'
                                    || element === 'residentsData'
                                    || element === 'created'
                                    || element === 'edited'
                                    || element === 'films'
                                    || element === 'residents'
                                    || element === 'url'
                                    || element === 'name'

                                ) return undefined

                                let keyWord = Capitalize(element.split("_").join(" "))
                                return <ProfileRow key={element} keyWord={keyWord} value={props[element]} />
                            })
                        }
                    </table>
                    <div className="profile__residents">
                        Residents:
                    </div>
                    <div className="residents">
                        {
                            props.isLoaded ? <PreloaderJedy />
                                :
                                props.residentsData.length
                                    ?
                                    props.residentsData.map(a => {
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