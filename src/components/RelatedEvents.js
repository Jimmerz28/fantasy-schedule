// @flow

import * as React from 'react';

import DaysList from "./DaysList";

type Props = {
    children: React.Element<typeof DaysList>
}

const RelatedEvents = ({ children }: Props) => {

    return (
        <div>
            <h2>Related Events</h2>
            { children }
        </div>
    );
}

export default RelatedEvents;
