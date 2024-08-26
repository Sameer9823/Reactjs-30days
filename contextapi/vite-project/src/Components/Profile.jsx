import React, {useState, useContext} from 'react';
import UserContext from '../Context/useContext';

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please login</div>

    return <div>welcome {user.username}</div>
}


export default Profile