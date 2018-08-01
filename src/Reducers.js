import { combineReducers } from "redux";

import { min, max, eachDayOfInterval } from "date-fns";

import { RECEIVE_EVENTS } from "./Actions";

function events(state = [], {type, events}) {
    switch(type) {

        case RECEIVE_EVENTS:
            return events;
        default:
            return state;
    }
}

function tags(state = [], {type, events}) {
    switch (type) {
        case RECEIVE_EVENTS:
            return [...new Set(events.map(event => event['Event Type']))];
        default:
            return state;
    }
}

function days(state = [], {type, events}) {
    switch(type) {
        case RECEIVE_EVENTS:

            const dates = events.map(event => event["Start Date & Time"]);

            return eachDayOfInterval({ start: min(dates), end: max(dates) });
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
    saved,
    days
});

export default genconApp;
