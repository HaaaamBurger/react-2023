import React, {useEffect, useState} from 'react';

import {axiosServices} from "../../Services/axiosServices";

import styles from './post.module.css'

const Post = ({postId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosServices.getPostsbyId(postId).then(({data}) => setPosts(data));
    },[postId])
    return (
        <div>
            {posts && <div className={styles.postWrapper}>
                <h2>Current post:</h2>
                <div>{posts.id}</div>
                <div>{posts.name}</div>
                <div>{posts.email}</div>
                <div>{posts.body}</div>
            </div>}
        </div>
    );
};

export {
    Post,
};