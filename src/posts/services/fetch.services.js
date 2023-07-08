import React from 'react';
import {BaseURL, methods} from "../links/BaseURL";

const FetchServices = {
   getPosts: () => fetch(BaseURL + methods.posts),
};

export {
    FetchServices,
};