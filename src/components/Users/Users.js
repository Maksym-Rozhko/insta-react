import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div className="right">
            <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" />
            <div className="users__block">
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
            </div>
        </div>
    )
}

export default Users;
