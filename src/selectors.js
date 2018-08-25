import { format, parse } from "date-fns";
import { createSelector } from "reselect";
import { headerDateFormat, naviDateFormat } from "./constants";

const getEvents = state => state.events;
const getSelectedTags = state => state.filter.tags;
const getFavs = state => state.favorites;
const isOnlyFavorites = state => state.filter.onlyFavs;

export const filteredEvents = createSelector(
    [getSelectedTags, isOnlyFavorites, getFavs, getEvents],
    (tags, onlyFavs, favs, events) => {
        let filterdResults = events;

        if (tags.length) {
            filterdResults = filterdResults.map(({ day, events }) => {
                return {
                    day,
                    events: events.filter(event =>
                        tags.includes(event["Event Type"])
                    )
                };
            });
        }

        if (onlyFavs) {
            filterdResults = filterdResults.map(({ day, events }) => {
                return {
                    day,
                    events: events.filter(event =>
                        favs.includes(event["Game ID"])
                    )
                };
            });
        }

        return filterdResults;
    }
);

export const eventDays = createSelector(
    [getEvents],
    (events) => {
        return events.reduce((acc, event) => {
            acc.push({
                value: event.day,
                formatted: format(
                    parse(event.day, headerDateFormat, new Date()),
                    naviDateFormat
                )
            });
            return acc;
        }, []);
    }
);
