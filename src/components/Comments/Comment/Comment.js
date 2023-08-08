import React from 'react';

const Comment = ({comment}) => {
    const {body,email,name} = comment;
    return (
        <div style={{margin: '15px'}}>
            <div>body: {body}</div>
            <div>email: {email}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {
    Comment,
};