import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {Movies} from "../Movies/Movies";

const router = createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        children: [
            {
                path: 'films',
                element: <Movies/>
            }
        ]
    }
])

export {router}