import React from 'react';

const User = (props) => {
    const { minImg, src, alt, name } = props;
    return (
        <a href="/" className={minImg ? "user minImg" : "user"}>
            <img src={src} alt={alt} />
            <div>
                {name}
            </div>
        </a>
    )
}

export default User;