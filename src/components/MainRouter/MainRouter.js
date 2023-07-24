import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {Films} from "../Films";

const router = createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        children: [
            {
                path: 'films',
                element: <Films/>
            }
        ]
    }
])

export {router}