import localForage from "localforage";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";

import genconApp from "./Reducers";

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: "gca",
    storage: localForage
};
const persistedReducer = persistReducer(persistConfig, genconApp);

let enhancer = composeEnhancers(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunkMiddleware);
}

const store = createStore(
    persistedReducer,
    enhancer
);

export default () => {
    const persistor = persistStore(store);
    return { store, persistor };
}
