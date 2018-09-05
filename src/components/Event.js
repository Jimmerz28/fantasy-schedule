import React from 'react';

const Event = ({ event, onClick, onFav, isFav }) => {

    const id = event["Game ID"];

    return (
        <li onClick={onClick.bind(this, id)}>
            <p>{event["Title"]}</p>
            <p>{event["Event Type"]}</p>
            <label htmlFor={id}>Favorite</label>
            <input type="checkbox" name={id} id={id}
                onChange={onFav} checked={isFav} />
        </li>
    );
}

export default Event;
