import React from 'react';
import './ProfileRow.css'


const ProfileRow = ({keyWord, value}) => {
    return (
        <tbody className="profile__tbody">
            <tr key={keyWord} className="profile__row">
                <td className="profile__name">
                    {keyWord !== "unknown" ? keyWord : "No information"}
                </td>
                <td className="profile__amount">
                    {(value !== "unknown" && "Unknown" !== value) ? value : "No information"}
                </td>
            </tr>
        </tbody>
    )
}



export default ProfileRow;