import React from 'react';

import {jsonServices} from "../../services/jsonServices";
import {Post} from "./Post/Post";

class Posts extends React.Component{
    constructor() {
        super();
        this.state = [];
    }

    componentDidMount() {
        jsonServices.getPosts().then(({data}) => this.setState(data));
    }
    render() {
        console.log(this.state);
        return(
            <div></div>
            // <div>{this.state.map(post => <Post post={post}/>)}</div>
        )
    }
}


export {
    Posts,
};