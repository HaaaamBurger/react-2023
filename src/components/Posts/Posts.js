import React from 'react';

import {Post} from "./Post/Post";
import {jsonServices} from "../../services";

class Posts extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        jsonServices.getPosts().then(({data}) => this.setState(data));
    }
    render() {

        let data = [];
        if (this.state) {
            for (let post in this.state) {
                data.push(this.state[post]);
            }
        }

        return(
            <div>{data.map(post => <Post post={post} key={post.id}/>)}</div>
        )
    }
}


export {
    Posts,
};