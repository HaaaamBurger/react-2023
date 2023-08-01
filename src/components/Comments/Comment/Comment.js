import React from 'react';

class Comment extends React.Component{
    constructor(props) {
        super(props);
    }

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