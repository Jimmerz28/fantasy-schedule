import React from 'react';

const EventList = ({ events, filters, onFav, favs }) => {

    const list = events.map(({ day, events }) => {

        const daysEvents = events

            .filter(event => {
                // First check to see if we even have anything to filter
                if (filters.tags.length === 0) {

                    // If we don't just show all events
                    return true;
                }

                // Otherwise check if our event type should be filtered out
                return filters.tags.includes(event["Event Type"]);
            })

            .filter(event => {

                if (filters.onlyFavs) {
                    return favs.includes(event["Game ID"]);
                }

                return true;
            })

            .map(event => {

                const id = event["Game ID"];
                const checked = favs.includes(id);

                return (
                    <li key={id}>
                        <p>{event["Title"]}</p>
                        <p>{event["Event Type"]}</p>
                        <label htmlFor={id}>Favorite</label>
                        <input type="checkbox" name={id} id={id} onChange={onFav} checked={checked} />
                    </li>
                );
            });

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
