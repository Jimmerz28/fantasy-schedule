import React from "react";

import { eventStartTime } from "../helpers";
import styles from "./Event.module.css";
import Favorite from "./Favorite";

const Event = ({ event, onClick, onFav, isFav, color }) => {

    const id = event["Game ID"];

    return (
        <li className={styles.event}>
            <div onClick={onClick.bind(this, id)}>
                <p>{eventStartTime(event)}</p>
                <div>
                    <p>{event["Title"]}</p>
                    <p className={styles["event-tag"]} style={{ "--tag-color": color }}>
                        <span>{event["Location"]}</span>
                        <span>
                            {event["Event Type"].slice(6)}
                        </span>
                    </p>
                </div>
            </div>
            <Favorite
                id={id}
                onClick={onFav}
                name={id}
                checked={isFav}
            />
        </li>
    );
}

export default Event;
