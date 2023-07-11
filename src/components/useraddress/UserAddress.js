import React from 'react';

const UserAddress = ({data}) => {
    const {address} = data;
    return (
        <div>
            <p>Address: {address.street} / {address.suite} / {address.city}</p>
        </div>
    );
};

export {
    UserAddress,
};