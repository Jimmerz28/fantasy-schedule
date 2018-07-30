import { parse } from "date-fns";
import { combineReducers } from "redux";

import { RECEIVE_EVENTS } from "./Actions";

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
            return [...new Set(action.events.map(event => event['Event Type']))];
        default:
            return state;
    }
}

function dates(state = [], { type, events }) {
    switch (type) {
        case RECEIVE_EVENTS:
            return events.map(event =>
             // 'MM/dd/yyyy hh:mm aaa'
             parse(
                 event['Start Date & Time'],
                 'MM/dd/yyyy hh:mm aaa',
                 new Date()
             )
         );
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
    dates
});

export default genconApp;
