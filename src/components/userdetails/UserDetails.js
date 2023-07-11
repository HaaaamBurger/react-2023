import React from 'react';

const UserDetails = ({data}) => {
    const {id,name,username,email,phone,website} = data;
    return (
        <div>
            <h3>User: {id} - {name}</h3>
            <h3>Username: {username}</h3>
            <p>Contacts: {email} , {phone} , {website}</p>
        </div>
    );
};

export {
    UserDetails,
};