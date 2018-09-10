// @flow

import * as React from 'react';

import type { VanillaEvent } from "../types";
import EventList from "./EventList";

const RelatedEvents = ({ relatedEvents, children }:
    { relatedEvents: Array<VanillaEvent>,
      children: React.Element<typeof EventList>
    }) => {

    return (
        <div>
            <h2>Related Events</h2>
            { children }
        </div>
    );
}

export default RelatedEvents;
