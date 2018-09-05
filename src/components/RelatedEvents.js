import React from 'react';

import type { VanillaEvent } from '../types';

const RelatedEvents = ({ relatedEvents }): { relatedEvents: Array<VanillaEvent> } => {

    // @TODO: Put an event-list in here
    return (
        <div>
            <h2>Related Events</h2>
            <ul></ul>
        </div>
    );
}

export default RelatedEvents;
