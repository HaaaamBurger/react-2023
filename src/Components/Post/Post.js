import React, {useEffect, useState} from 'react';

import {axiosServices} from "../../Services/axiosServices";

import styles from './post.module.css'

const Post = ({postId}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axiosServices.getPostsbyId(postId).then(({data}) => setPosts(data));
    },[postId])
    return (
        <div>
            {posts && <div className={styles.postWrapper}>
                <h2>Current post:</h2>
                <div>Id: {posts.id}</div>
                <div>Name: {posts.name}</div>
                <div>Email: {posts.email}</div>
                <div>Body: {posts.body}</div>
            </div>}
        </div>
    );
};

export {
    Post,
};