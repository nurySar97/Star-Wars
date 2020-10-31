import React from 'react';
import './ProfileRow.css'


const ProfileRow = (title, value) => {
    return (
        <tbody className="profile__tbody">
            <tr className="profile__row">
                <td className="profile__name">
                    {title}
                </td>
                <td className="profile__amount">
                    {value}
                </td>
            </tr>
        </tbody>
    )
}



export default ProfileRow;