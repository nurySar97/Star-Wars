import React from 'react';
import './ProfileRow.css'


const ProfileRow = (title, value) => {
    return (
        <tbody className="profile__tbody">
            <tr className="profile__row">
                <td className="profile__name">
                    {title !== "unknown" ? title : "No information"}
                </td>
                <td className="profile__amount">
                    {(value !== "unknown" && "Unknown" !== value) ? value : "No information"}
                </td>
            </tr>
        </tbody>
    )
}



export default ProfileRow;