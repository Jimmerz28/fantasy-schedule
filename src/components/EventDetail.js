// @flow

import React from 'react';

import { eventStartEndTime } from '../helpers';
import type { VanillaEvent } from '../types';
import styles from "./EventDetail.module.css";
import RelatedEvents from './RelatedEvents';

const EventDetail = ({ event, relatedEvents }: { event: VanillaEvent, relatedEvents: RelatedEvents }) => {

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
            { relatedEvents }
        </div>
    );
}

export default EventDetail;
