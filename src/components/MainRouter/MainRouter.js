import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../../layouts";
import {MovieInfo} from "../MovieInfo";
import {Main} from "../Main";
import {Movies} from "../Movies";

const router = createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Main/>
            },
            {
                path: 'films',
                element: <Movies/>
            },
            {
                path: 'films/movie/:id',
                element: <MovieInfo/>
            }
        ]
    }
])

export {router}