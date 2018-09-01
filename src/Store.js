import { applyMiddleware, compose, createStore } from "redux";

import { createLogger } from "redux-logger";
import genconApp from "./Reducers";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let enhancer = composeEnhancers(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunkMiddleware);
}

const store = createStore(
    genconApp,
    enhancer
);

export default store;
