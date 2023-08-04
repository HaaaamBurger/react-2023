import React, {Component} from 'react';

import {Post} from "./Post/Post";
import {jsonServices} from "../../services";

class Posts extends Component{
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        jsonServices.getPosts().then(({data}) => this.setState({posts: data}));
    }
    render() {

        return(
            <div>{this.state.posts.map(post => <Post post={post} key={post.id}/>)}</div>
        )
    }
}


export {
    Posts,
};