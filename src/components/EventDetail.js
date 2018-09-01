import React from 'react';
import type { VanillaEvent } from '../types';

const EventDetail = ({ event }: { event: VanillaEvent }) => {
    return (
        <div><p>{event["Game ID"]}</p></div>
    );
}

export default EventDetail;
