// See: https://redux.js.org/advanced/async-actions#actions-js-asynchronous
import { createDate } from "./helpers";

export const REQUEST_EVENTS = "EVENTS::REQUEST";
function requestEvents() {
    return {
        type: REQUEST_EVENTS
    };
}

export const RECEIVE_EVENTS = "EVENTS::RECIEVED";
function receiveEvents(events) {
    return {
        type: RECEIVE_EVENTS,
        events
    };
}

export function fetchPosts() {
    return function (dispatch) {
        dispatch(requestEvents);

        return fetch("http://localhost:3001/events")
            .then(res => res.json(), error => console.error(error))

            .then(json => {

                const asDates = json.map(event => {
                    event["Start Date & Time"] = createDate(event["Start Date & Time"]);
                    event["End Date & Time"] = createDate(event["End Date & Time"]);
                    event["Last Modified"] = createDate(event["Last Modified"], false);

                    return event;
                });

                dispatch(receiveEvents(asDates));
            });
    };
}

export const ADD_TAG = "TAG::ADD";
export function addTag(tag) {
    return {
        type: ADD_TAG,
        tag
    }
}

export const REMOVE_TAG = "TAG::REMOVE";
export function removeTag(tag) {
    return {
        type: REMOVE_TAG,
        tag
    }
}

export const ADD_FAVORITE = "FAVORITE::ADD";
export function addFavorite(eventID) {
    return {
        type: ADD_FAVORITE,
        eventID
    }
}

export const REMOVE_FAVORITE = "FAVORITE::REMOVE";
export function removeFavorite(eventID) {
    return {
        type: REMOVE_FAVORITE,
        eventID
    }
}
