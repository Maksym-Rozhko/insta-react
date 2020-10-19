import React from 'react';
import User from '../Users/User';
import Palette from '../Palette/Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott"/>
            <Palette />
        </div>
    )
}

export default Profile;