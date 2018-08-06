import React from 'react';

const EventList = ({ events }) => {

    const list = events.map( ({day, events}) => {

        const daysEvents = events.map(event => (

            <li key={event["Game ID"]}>
                <p>{event["Title"]}</p>
            </li>
        ));

    return (
        <div key={day} id={day}>
                <h2>{day}</h2>
                <ul>{daysEvents}</ul>
        </div>
    );

    });

    return <ul>{list}</ul>;
}

export default EventList;
