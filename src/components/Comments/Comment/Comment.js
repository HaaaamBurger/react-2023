import React from 'react';

class Comment extends React.Component{
    constructor({comment}) {
        super({comment});
        this.comment = comment;
    }

    render() {
        return(
            <div>
                <div>{this.comment.name}</div>
                <div>{this.comment.email}</div>
                <div>{this.comment.body}</div>
            </div>
        )
    }
}

export {Comment};