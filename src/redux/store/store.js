import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {carsReducer} from "../reducers";

const rootReducer = combineReducers({
    carsReducer
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly;

const store = createStore(rootReducer,composeEnhancers());

export {store};