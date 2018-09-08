import React from 'react';

import type { VanillaEvent } from '../types';

const RelatedEvents = ({ relatedEvents, children }): { relatedEvents: Array<VanillaEvent> } => {

    return (
        <div>
            <h2>Related Events</h2>
            { children }
        </div>
    );
}

export default RelatedEvents;
