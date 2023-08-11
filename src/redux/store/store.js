import {applyMiddleware, combineReducers, createStore} from "redux";
import {rickmortyReducer} from "../reducers";
import {composeWithDevToolsDevelopmentOnly, devToolsEnhancerDevelopmentOnly} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    rickmortyReducer
})
const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));

export {store};