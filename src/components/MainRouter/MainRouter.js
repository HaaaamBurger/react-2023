import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {Movies} from "../Movies/Movies";
import {Main} from "../Main/Main";
import {Film} from "../pages/Film/Film";

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
                path: 'movie/?id=movieId',
                element: <Film/>
            }
        ]
    }
])

export {router}