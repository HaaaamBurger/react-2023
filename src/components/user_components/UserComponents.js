import React, {useEffect, useState} from 'react';

import {fetchServices} from "../../services/fetch.services";
import {UserComponent} from "../user_component/UserComponent";

const UserComponents = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchServices.getUsers().then(response => response.json()).then(data => setUsers(data));
    },[])

    return (
        <div>
            <div>
                {/*{user && user.name}*/}
                {user && user.map(posts => <div>
                    <h3>Id: {posts.id} / UserId: {posts.userId}</h3>
                    <p>Title: {posts.title}</p>
                </div>)}
            </div>
            <hr/>
            <div>
                {users.map(data => <UserComponent key={data.id} user={data} setUser={setUser}/>)}
            </div>
        </div>
    );
};

export {
    UserComponents,
};