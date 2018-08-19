import React from 'react';

const EventList = ({ events, onFav, favs }) => {

    const list = events.map(({ day, events }) => {

        const daysEvents = events.map(event => {

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
