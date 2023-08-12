import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../redux/actions/postsActions";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.postsReducer.posts);

    useEffect(() => {
       dispatch(getPosts())
    },[])

    console.log(posts)

    return (
        <div>
            Posts
        </div>
    );
};

export {
    Posts,
};