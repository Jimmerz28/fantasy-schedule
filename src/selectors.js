// @flow

import type { DaysEvents, VanillaEvent } from "./types";
import { format, parse } from "date-fns";
import { headerDateFormat, naviDateFormat } from "./constants";

import { createSelector } from "reselect";

const getEvents = state => state.events;
const getSelectedTags = state => state.filter.tags;
const getFavs = state => state.favorites;
const isOnlyFavorites = state => state.filter.onlyFavs;
const selectedEventID = state => state.dialog.id;

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

export const chosenEvent = createSelector(
    [filteredEvents, selectedEventID],
    (events: Array<DaysEvents>, eventID: string) => {
        let testValue = null;

        events.some(({ day, events }) => {
            testValue = events.find((singleEvent: VanillaEvent) => singleEvent["Game ID"] === eventID)

            return testValue;
        });

        return testValue;
    }
);
