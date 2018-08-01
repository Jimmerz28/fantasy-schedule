import React from 'react';

const EventList = ({ events }) => {

    const list = events.map(event =>
        <li key={event["Game ID"]}>
            <p>{event["Title"]}</p>
        </li>
    );

    return <ul>{list}</ul>;
}

export default EventList;
