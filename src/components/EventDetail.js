// @flow

import React from 'react';
import type { VanillaEvent } from '../types';
import { eventStartEndTime } from '../helpers';

const EventDetail = ({ event }: { event: VanillaEvent }) => {
    return (
        <div>
            <h1>{event["Title"]}</h1>
            <p>{eventStartEndTime(event)}</p>
            <p className="location">
                <span>{event["Location"]}</span>
                <span>{event["Room Name"]}</span>
                <span>{event["Table Number"]}</span>
            </p>
            <p>{event["Short Description"]}</p>
            <p>{event["Long Description"]}</p>
            <p>{event["Event Type"].slice(6)}</p>
        </div>
    );
}

export default EventDetail;
