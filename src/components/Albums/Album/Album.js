import React from 'react';

const Album = ({album}) => {
    const {id,title} = album;
    return (
        <div style={{margin: '15px'}}>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {
    Album,
};