import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {axiosServices} from "../../Services/axiosServices";
import {Comment} from "./Comment/Comment";
import {Post} from "../Post/Post";


const Comments = () => {
    const [comments,setComments] = useState([]);

    const [postId,setPostId] = useState(null);

    useEffect(() => {
        axiosServices.getComments().then(({data}) => setComments(data));
    },[]);

    return (
        <div>
            {postId && <Post key={postId} postId={postId}/>}
            <hr/>
            <div>{comments.map(comment => <Comment key={comment.id} comment={comment} setPostId={setPostId}/>)}</div>
        </div>
    );
};

export {
    Comments,
};