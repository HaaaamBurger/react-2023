import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {placeholderServices} from "../../services/placeholderServices";
import {postsActions} from "../../redux/actions/postsActions";
import {Post} from "./Post";

const Posts = () => {
    const posts = useSelector(store => store.postsReducer.posts);
    const postsDispatch = useDispatch();

    useEffect(() => {
        placeholderServices.getPosts().then(({data}) => postsDispatch(postsActions.setAll(data)));
    },[])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts,
};