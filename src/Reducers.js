import { format, compareAsc, parse } from "date-fns";
import { combineReducers } from "redux";

import { RECEIVE_EVENTS } from "./Actions";
import { headerDateFormat } from "./constants";

function events(state = [], {type, events}) {
    switch(type) {

        case RECEIVE_EVENTS:

            // We want to split up the date events into days
            const chunked = events.reduce((acc, event) => {

                const day = format(event["Start Date & Time"], headerDateFormat);

                if (!acc.find(chunk => chunk.day === day)) {
                    acc.push({ day, events: []});
                }

                const found = acc.find(chunk => chunk.day === day);

                found.events.push(event);

                return acc;

            }, []);

            return chunked.sort((a, b) => {
                const first = parse(a.day, headerDateFormat, new Date());
                const next = parse(b.day, headerDateFormat, new Date());

                return compareAsc(first, next);
            });
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

function saved(state = [], action) {
    return state;
}

const genconApp = combineReducers({
    events,
    tags,
    saved
});

export default genconApp;
