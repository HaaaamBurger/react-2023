import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {PostInfo} from "../postInfo/PostInfo";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [info,setInfo] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts));
    },[]);

    const infoHandler = (post) => {
        setInfo(post);
    }

    return (
        <div>
            <div >{info&&<div><PostInfo info={info}/></div>}</div>
            <hr/>
            <div>
                {posts.map(post => <Post key={post.id} post={post} infoHandler={infoHandler}/>)}
            </div>
        </div>
    )
}

export {Posts}
