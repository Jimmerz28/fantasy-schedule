// @flow

import { ADD_FAVORITE, ADD_TAG, FILTER_FAVORITES, HIDE_DIALOG, RECEIVE_EVENTS, REMOVE_FAVORITE, REMOVE_TAG, SHOW_DIALOG } from "./Actions";
import type { DaysEvents, VanillaEvent } from "./types";
import { colors, headerDateFormat } from "./constants";
import { compareAsc, format, parse } from "date-fns";

import { combineReducers } from "redux";
import {createDate} from "./helpers";

function events(state = [], { type, events }: { type: string, events: Array<VanillaEvent> }) {
    switch (type) {

        case RECEIVE_EVENTS:

            // We want to split up the date events into days
            const chunked = events.reduce((acc: Array<DaysEvents>, event: VanillaEvent) => {

                event["Start Date & Time"] = createDate(event["Start Date & Time"]);

                const day: string = format(event["Start Date & Time"], headerDateFormat);
                const found: void | DaysEvents = acc.find(chunk => chunk.day === day);

                if (found) {
                    found.events.push(event);
                } else {
                    acc.push({ day, events: [] });
                }

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
            return {...state, tags: [...state.tags, tag] };
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

const dialogState = {
    show: false,
    id: ''
};
function dialog(state = dialogState, { type, id }) {
    switch(type) {
        case SHOW_DIALOG:
            return { show: true, id };
        case HIDE_DIALOG:
            return { ...state, show: false };
        default:
            return state;
    }
}

const genconApp = combineReducers({
    events,
    tags,
    favorites,
    filter,
    dialog
});

export default genconApp;
