import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {MainRouter} from "./components/MainRouter/MainRouter";
import {
    RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={MainRouter} />
);

reportWebVitals();
