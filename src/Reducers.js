import { compareAsc, format, parse } from "date-fns";
import { combineReducers } from "redux";

import { ADD_FAVORITE, ADD_TAG, RECEIVE_EVENTS, REMOVE_FAVORITE, REMOVE_TAG } from "./Actions";
import { headerDateFormat } from "./constants";

function events(state = [], { type, events }) {
    switch (type) {

        case RECEIVE_EVENTS:

            // We want to split up the date events into days
            const chunked = events.reduce((acc, event) => {

                const day = format(event["Start Date & Time"], headerDateFormat);

                if (!acc.find(chunk => chunk.day === day)) {
                    acc.push({ day, events: [] });
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

function tags(state = [], { type, events }) {
    switch (type) {
        case RECEIVE_EVENTS:
            return [...new Set(events.map(event => event['Event Type']))];
        default:
            return state;
    }
}

const filters = {
    tags: [],
    onlyFavs: false
};
function filter(state = filters, { type, tag, checked = false }) {
    switch (type) {

        // @NOTE: Not sure if we need add/remove to be separate
        case ADD_TAG:
            return Object.assign(state, {
                tags: [...state.tags, tag]
            });
        case REMOVE_TAG:
            return Object.assign(state, {
                tags: state.tags.filter(current => current !== tag)
            });
        case FILTER_FAVORITES:
            return Object.assign(state, {
                onlyFavs: checked
            });
        default:
            return state;
    }
}

function favorites(state = [], { type, eventID }) {
    switch (type) {
        case ADD_FAVORITE:
            return [...state, eventID];
        case REMOVE_FAVORITE:
            return state.filter(current => current !== eventID);
        default:
            return state;
    }
}

const genconApp = combineReducers({
    events,
    tags,
    favorites,
    filter
});

export default genconApp;
