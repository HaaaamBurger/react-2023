import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import {albumsReducer, commentsReducer, postsReducer} from "../reducers";

const rootReducer = combineReducers({
    postsReducer,
    commentsReducer,
    albumsReducer
});

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};