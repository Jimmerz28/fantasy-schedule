import { format, parse } from "date-fns";
import { dateFormat, dateTimeFormat, naviDateFormat } from "./constants";

export function createDate(date, withTime = true) {
    const format = withTime ? dateTimeFormat : dateFormat;

    return parse(date, format, new Date());
}

export function createDayID(date, stringFormat) {
    return format(parse(date, stringFormat, new Date()), naviDateFormat).replace(" ", "-");
}
