import React from 'react';

import User from '../user/User'

const Users = ({users}) => {
    return (
        <div>
            {users.map(data => <User user={data}/>)}
        </div>
    );
};

export {
    Users,
};