import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                path: '/todos',
                element: <div>Todos</div>,
            },
            {
                path: '/albums',
                element: <div>Albums</div>,
            },
            {
                path: '/comments',
                element: <div>Comments</div>,
                children: [
                    {

                    }
                ]
            }
        ]
    },
]);

export {MainRouter}