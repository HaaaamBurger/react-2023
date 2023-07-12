import React from 'react';

const Post = ({post}) => {
    const {userId, id, title} = post;
    return (
        <div>
            <h3>UserId: {userId} - Id: {id}</h3>
            <p>Title: {title}</p>
        </div>
    );
};

export {
    Post,
};