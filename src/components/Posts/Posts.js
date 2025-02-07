import React, { Component } from 'react';
import InstaService from '../../services/instaService';
import User from '../Users/User';
import ErrorMessage from '../Error/Error';


export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        });
        // console.log(this.state.posts);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altName, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo} 
                        alt={altName} 
                        name={name} 
                        minImg/>
                    <img src={src} alt={alt} />
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        });
    }


    render() {
        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}
