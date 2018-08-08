import React from 'react';

const EventList = ({ events, tags }) => {

    const list = events.map( ({day, events}) => {

        const daysEvents = events
            .filter(event => {

                // First check to see if we even have anything to filter
                if (tags.length === 0) {

                    // If we don't just show all events
                    return event;
                }

                // Otherwise check if our event type should be filtered out
                return tags.includes(event["Event Type"]);
            })
            .map(event => (

                <li key={event["Game ID"]}>
                    <p>{event["Title"]}</p>
                    <p>{event["Event Type"]}</p>
                </li>
            ));

    return (
        <div key={day} id={day}>
                <h2>{day}</h2>
                <ul>{daysEvents}</ul>
        </div>
    );

    });

    return (
        <div>
            <ul>{list}</ul>
        </div>
    );
}

export default EventList;
