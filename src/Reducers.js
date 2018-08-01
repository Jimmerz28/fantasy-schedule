import { combineReducers } from "redux";

import { createDate } from "./helpers";

import { RECEIVE_EVENTS } from "./Actions";

function events(state = [], action) {
    switch(action.type) {

        case RECEIVE_EVENTS:

            return action.events.map(event => {

                event["Start Date & Time"] = createDate(event["Start Date & Time"]);
                event["End Date & Time"] = createDate(event["End Date & Time"]);
                event["Last Modified"] = createDate(event["Last Modified"], false);

                return event;
            });

        default:
            return state;
    }
}

function tags(state = [], action) {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return [...new Set(action.events.map(event => event['Event Type']))];
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
