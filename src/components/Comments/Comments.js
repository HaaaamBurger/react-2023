import React, {Component} from 'react';

import {Comment} from "./Comment/Comment";
import {jsonServices} from "../../services";

class Comments extends Component{
    constructor() {
        super();
        this.state = {
            comments: []
        };

    }

    componentDidMount() {
        jsonServices.getComments().then(({data}) => this.setState({comments: data}));
    }

    render() {

        return(
            <div>{this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
        )
    }
}

export {Comments}