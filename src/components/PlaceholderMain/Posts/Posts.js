import React, {useEffect} from 'react';

import styles from './Posts.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Post} from "./Post";
import {getPosts} from "../../../redux";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.postsReducer.posts);

    useEffect(() => {
       dispatch(getPosts())
    },[])

    return (
        <div className={styles.PostsWrapper}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts,
};