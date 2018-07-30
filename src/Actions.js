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
    return function(dispatch) {
        dispatch(requestEvents);

        return fetch("http://localhost:3001/events")
            .then(res => res.json(), error => console.error(error))

            .then(json => {
                dispatch(receiveEvents(json));
            });
    };
}
