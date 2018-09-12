import React from "react";

import { eventStartTime } from "../helpers";
import styles from "./Event.module.css";

const Event = ({ event, onClick, onFav, isFav }) => {

    const id = event["Game ID"];

    return (
        <li className={styles.event} onClick={onClick.bind(this, id)}>
            <p>{eventStartTime(event)}</p>
            <div>
                <p>{event["Title"]}</p>
                <p>{event["Event Type"].slice(6)}</p>
                <label htmlFor={id}>Favorite</label>
                <input type="checkbox" name={id} id={id}
                    onChange={onFav} checked={isFav} />
            </div>
        </li>
    );
}

export default Event;
