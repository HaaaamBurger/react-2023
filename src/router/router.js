import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {Posts} from "../components/Posts";
import {Comments} from "../components/Comments";
import {Albums} from "../components/Albums";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/posts',
                element: <Posts/>
            },
            {
                path: '/comments',
                element: <Comments/>
            },
            {
                path: '/albums',
                element: <Albums/>
            }
        ]
    }
])

export {router}