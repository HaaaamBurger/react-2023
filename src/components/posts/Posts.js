import React, {useEffect, useState} from 'react';

import {fetchServices} from "../../services/fetch.services";
import {Post} from "./post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchServices.getPosts(userId).then(response => response.json()).then(data => setPosts(data))
    },[userId]);

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {
    Posts,
};