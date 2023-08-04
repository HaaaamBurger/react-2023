import React, {Component} from 'react';

class Comment extends Component{

    render() {
        const {name,email,body} = this.props.comment
        return(
            <div style={{margin: '10px'}}>
                <div>{name}</div>
                <div>{email}</div>
                <div>{body}</div>
            </div>
        )
    }
}

export {Comment};