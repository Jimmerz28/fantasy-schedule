// See: https://redux.js.org/advanced/async-actions#actions-js-asynchronous
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

        return fetch(process.env.REACT_APP_EVENTS_URL)
            .then(res => res.json(), error => console.error(error))

            .then(json => {
                dispatch(receiveEvents(json));
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

export const FILTER_FAVORITES = "FAVORITES::FILTER";
export function filterFavs(checked) {
    return {
        type: FILTER_FAVORITES,
        checked
    }
}

export const SELECT_EVENT = "EVENT::SELECTED";
export function selectEvent(id) {
    return {
        type: SELECT_EVENT,
        id
    }
}
