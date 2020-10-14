import React, { Component } from 'react';
import User from '../Users/User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://i.pinimg.com/originals/83/72/e9/8372e957fc617e9e956f116afd3e599b.jpg" alt="man" name="Scott" minImg/>
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dil fjsid orerii opiios sfiifo jfif sp ofij fis ofsf fs
                    Lorem ipsum dil fjsid orerii opiios sfiifo jfif sp ofij fis ofsf fs
                    Lorem ipsum dil fjsid orerii opiios sfiifo jfif sp ofij fis ofsf fs
                    Lorem ipsum dil fjsid orerii opiios sfiifo jfif sp ofij fis ofsf fs
                </div>
            </div>
        )
    }
}

