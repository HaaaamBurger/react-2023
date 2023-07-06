import React, {useEffect, useState} from 'react';

import {User} from "./User";
import {links} from "../links/BaseURL";
import {Posts} from "../posts/Posts";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);

    useEffect(() => {
       fetch(links.users()).then(response => response.json()).then(data => setUsers(data));
    },[])

    const postsHandler = (id) => {
        fetch(links.posts(id)).then(response => response.json()).then(data => setPosts(data));
    }

    return (
        <div>
            <div>
                {users.map(value => <User key={value.id} user={value} postsHandler={postsHandler}/>)}
            </div>
            <div>
                {posts&&<div>{posts.map(item => <Posts key={item.id} posts={item}/>)}</div>}
            </div>
        </div>
    )
};

export {
    Users,
};