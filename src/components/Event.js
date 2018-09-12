import React from "react";

import styles from "./Event.module.css";

const Event = ({ event, onClick, onFav, isFav }) => {

    const id = event["Game ID"];

    return (
        <li className={styles.event} onClick={onClick.bind(this, id)}>
            <p>{event["Title"]}</p>
            <p>{event["Event Type"]}</p>
            <label htmlFor={id}>Favorite</label>
            <input type="checkbox" name={id} id={id}
                onChange={onFav} checked={isFav} />
        </li>
    );
}

export default Event;
