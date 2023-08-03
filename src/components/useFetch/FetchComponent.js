import React from 'react';
import {useFetch} from "./useFetch";

const FetchComponent = () => {

    const users = useFetch('users');
    console.log(users);

    const posts = useFetch('posts');
    console.log(posts);

    const comments = useFetch('comments ');
    console.log(comments);

    return (
        <div>

        </div>
    );
};

export {
    FetchComponent,
};