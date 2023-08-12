import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {Cars, Placeholder, RickMorty} from "../pages";
import {Albums, Comments, Posts} from "../components";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'placeholder'}/>
            },
            {
                path: 'placeholder',
                element: <Placeholder/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={'/placeholder/posts'}/>
                    },
                    {
                        path: '/placeholder/posts',
                        element: <Posts/>
                    },
                    {
                        path: '/placeholder/comments',
                        element: <Comments/>
                    },
                    {
                        path: '/placeholder/albums',
                        element: <Albums/>
                    }
                ]
            },
            {
                path: 'cars',
                element: <Cars/>
            },
            {
                path: 'rickmorty',
                element: <RickMorty/>
            }
        ]
    }
])

export {router};