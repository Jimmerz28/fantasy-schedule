// @flow

import { combineReducers } from "redux";
import { ADD_FAVORITE, ADD_TAG, FILTER_FAVORITES, RECEIVE_EVENTS, REMOVE_FAVORITE, REMOVE_TAG, SELECT_EVENT } from "./Actions";
import { colors } from "./constants";
import { chunkEvents } from "./helpers";
import type { VanillaEvent } from "./types";

function events(state = [], { type, events }: { type: string, events: Array<VanillaEvent> }) {
    switch (type) {

        case RECEIVE_EVENTS:

            // We want to split up the date events into days
            return chunkEvents(events);

        default:
            return state;
    }
}

function tags(state = [], { type, events }) {
    switch (type) {
        case RECEIVE_EVENTS:
            return [...new Set(events.map(event => event['Event Type']))]
                .sort()
                .map((tag, index) => {
                    return {
                        tag,
                        color: colors[index]
                    }
                });
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
            return { ...state, tags: [...state.tags, tag] };
        case REMOVE_TAG:
            return { ...state, tags: state.tags.filter(current => current !== tag) };
        case FILTER_FAVORITES:
            return { ...state, onlyFavs: checked };
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

function selectedEvent(state = '', { type, id }) {
    switch (type) {
        case SELECT_EVENT:
            return id;
        default:
            return state;
    }
}

const genconApp = combineReducers({
    events,
    tags,
    favorites,
    filter,
    selectedEvent
});

export default genconApp;
