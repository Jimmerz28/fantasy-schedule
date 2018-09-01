import { dateFormat, dateTimeFormat, naviDateFormat } from "./constants";
import { format, parse } from "date-fns";

import type { VanillaEvent } from './types';

export function createDate(date, withTime = true) {
    const format = withTime ? dateTimeFormat : dateFormat;

    return parse(date, format, new Date());
}

export function createDayID(date, stringFormat) {
    return format(parse(date, stringFormat, new Date()), naviDateFormat).replace(" ", "-");
}

// @TODO: This will need to be more robust since some events are overnight
export function eventStartEndTime(event: VanillaEvent) {
    const end = createDate(event["End Date & Time"]);
    return `${format(event["Start Date & Time"], "EEE. MMM d, h:mm aaa")} - ${format(end, "h:mm aaa")}`;
}
