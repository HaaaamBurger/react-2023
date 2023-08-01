import React from 'react';

class Post extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {id,title,body} = this.props.post;
        return(
            <div>
                <div>{id}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
        )
    }
}

export {
    Post,
};