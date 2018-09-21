import './index.css';

import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from './App';
import storeConfig from "./Store";
import registerServiceWorker from './registerServiceWorker';

const { persistor, store } = storeConfig();

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
