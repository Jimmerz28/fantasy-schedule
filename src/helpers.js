// @flow

import { compareAsc, format, parse } from "date-fns";

import { dateFormat, dateTimeFormat, eventTime, headerDateFormat, naviDateFormat } from "./constants";

export function createDate(date: string, withTime: boolean = true) {
    const format = withTime ? dateTimeFormat : dateFormat;

    return parse(date, format, new Date());
}

export function createDayID(date: string, stringFormat: string) {
    return format(parse(date, stringFormat, new Date()), naviDateFormat).replace(" ", "-");
}

// @TODO: This will need to be more robust since some events are overnight
export function eventStartEndTime(event: GenConEvent) {
    const end = createDate(event["End Date & Time"]);
    return `${format(event["Start Date & Time"], "EEE. MMM d, h:mm aaa")} - ${format(end, "h:mm aaa")}`;
}

export function chunkEvents(events: Array<GenConEvent>) {
    const chunked = events.reduce((acc: Array<DaysEvents>, event: GenConEvent) => {

        if (typeof event["Start Date & Time"] === "string") {
            event["Start Date & Time"] = createDate(event["Start Date & Time"]);
        }

        const day: string = format(event["Start Date & Time"], headerDateFormat);
        const found: void | DaysEvents = acc.find(chunk => chunk.day === day);

        if (found) {
            found.events.push(event);
        } else {
            acc.push({ day, events: [event] });
        }

        return acc;

    }, []);

    chunked.sort((a, b) => {
        const first = parse(a.day, headerDateFormat, new Date());
        const next = parse(b.day, headerDateFormat, new Date());

        return compareAsc(first, next);
    });

    chunked.forEach(({ events }) => {
        events.sort((a1, b1) => compareAsc(a1["Start Date & Time"], b1["Start Date & Time"]));
    });

    return chunked;
}

export function eventStartTime(event: GenConEvent) {
    let startTime = format(event["Start Date & Time"], eventTime);

    return startTime.replace(":00", "");
}
