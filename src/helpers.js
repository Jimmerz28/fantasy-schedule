import { parse } from "date-fns";

import { dateFormat, dateTimeFormat } from "./constants";

export function createDate(date, withTime = true) {
    const format = withTime ? dateTimeFormat : dateFormat;

    return parse(date, format, new Date());
}
