import React from 'react';

const RM = ({rickmorty}) => {
    const {image,name} = rickmorty;
    return (
        <div style={{margin: '15px'}}>
            <h2>{name}</h2>
            <img src={image} alt=""/>
        </div>
    );
};

export {
    RM,
};