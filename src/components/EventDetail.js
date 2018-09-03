// @flow

import React from 'react';
import { eventStartEndTime } from '../helpers';
import type { VanillaEvent } from '../types';
import styles from "./EventDetail.module.css";

const EventDetail = ({ event, relatedEvents }: { event: VanillaEvent, relatedEvents: Array<VanillaEvent> }) => {

    if (!event) {
        return null;
    }

    // @TODO: Make this look nicer
    const related = relatedEvents.map(single => (
        <li key={single["Game ID"]}>{single["Start Date & Time"].toString()}</li>
    ));

    return (
        <div className={ styles["event-detail"] }>
            <h1>{event["Title"]}</h1>
            <p>{eventStartEndTime(event)}</p>
            <p className={ styles["location"] }>
                <span>{event["Location"]}</span>
                <span>{event["Room Name"]}</span>
                <span>{event["Table Number"]}</span>
            </p>
            <p>{event["Short Description"]}</p>
            <p>{event["Long Description"]}</p>
            <p>{event["Event Type"].slice(6)}</p>
            <h2>Related Events</h2>
            <ul>{related}</ul>
        </div>
    );
}

export default EventDetail;
