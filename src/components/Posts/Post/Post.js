import React from 'react';

class Post extends React.Component{
    constructor({post}) {
        super({post});
        this.post = post;
    }

    render() {
        return(
            <div>
                <div>{this.post.id}</div>
                <div>{this.post.title}</div>
                <div>{this.post.body}</div>
            </div>
        )
    }
}

export {
    Post,
};