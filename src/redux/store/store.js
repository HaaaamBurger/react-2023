import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {postsReducer} from "../reducers/postsReducer";
import {albumsReducer} from "../reducers/albumsReducer";
import {commentsReducer} from "../reducers/commentsReducer";

const rootReducers = combineReducers({
    postsReducer,
    albumsReducer,
    commentsReducer
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducers,composeEnhancers());

export {store};