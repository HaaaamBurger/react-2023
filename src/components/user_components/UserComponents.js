import React, {useEffect, useState} from 'react';

import {fetchServices} from "../../services/fetch.services";
import {UserComponent} from "../user_component/UserComponent";
import {Posts} from "../posts/Posts";

const UserComponents = () => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        fetchServices.getUsers().then(response => response.json()).then(data => setUsers(data));
    },[])

    return (
        <div>
            <div>
                {userId && <Posts userId={userId}/>}
            </div>
            <hr/>
            <div>
                {users.map(data => <UserComponent key={data.id} user={data} setUserId={setUserId}/>)}
            </div>
        </div>
    );
};

export {
    UserComponents,
};