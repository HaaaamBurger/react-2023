import React from 'react';

import {Comment} from "./Comment/Comment";
import {jsonServices} from "../../services";

class Comments extends React.Component{
    constructor() {
        super();
        this.state = {};

    }

    componentDidMount() {
        jsonServices.getComments().then(({data}) => this.setState(data));
    }

    render() {
        const data = [];
        if (this.state) {
            for(let comment in this.state) {
                data.push(this.state[comment]);
            }
        }

        return(
            <div>{data.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
        )
    }
}

export {Comments}