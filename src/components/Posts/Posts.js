import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://www.nyfa.edu/student-resources/wp-content/uploads/2014/10/hulk-667988_640.jpg" alt="first" />
                <Post src="https://i.pinimg.com/originals/bf/e3/27/bfe3271517b2fafe26133bca00b98fa1.jpg" alt="second" />
            </div>
        )
    }
}
