import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import genconApp from "./Reducers";

const loggerMiddleware = createLogger();

const store = createStore(
    genconApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;
