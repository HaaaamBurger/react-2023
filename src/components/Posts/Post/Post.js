import React from 'react';

const Post = ({post}) => {
    const {body,title,id} = post;
    return (
        <div style={{margin: '15px'}}>
            <div>body: {body}</div>
            <div>title: {title}</div>
            <div>id: {id}</div>
        </div>
    );
};

export {
    Post,
};