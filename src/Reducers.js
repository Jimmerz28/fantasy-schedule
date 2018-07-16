import { combineReducers } from "redux";

import { RECEIVE_EVENTS } from "./Actions";

function events(state = [], action) {
    switch(action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        default:
            return state;
    }
}

function tags(state = [], action) {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.tags;
        default:
            return state;
    }
}

function saved(state = [], action) {
    return state;
}

const genconApp = combineReducers({
    events,
    tags,
    saved
});

export default genconApp;
