import React from 'react';
import { headerDateFormat } from "../constants";
import { createDayID } from "../helpers";
import styles from "./EventList.module.css";

const EventList = ({ events, onFav, favs, showDialog }) => {

    const list = events.map(({ day, events }) => {

        const daysEvents = events.map(event => {

                const id = event["Game ID"];
                const checked = favs.includes(id);

                return (
                    <li key={id} onClick={ showDialog.bind(this, id) }>
                        <p>{event["Title"]}</p>
                        <p>{event["Event Type"]}</p>
                        <label htmlFor={id}>Favorite</label>
                        <input type="checkbox" name={id} id={id}
                            onChange={onFav} checked={checked} />
                    </li>
                );
            });

        return (
            <div key={day} id={ createDayID(day, headerDateFormat) }>
                <h2>{day}</h2>
                <ul>{daysEvents}</ul>
            </div>
        );

    });

    return (
        <div className={ styles.events }>
            <ul>{list}</ul>
        </div>
    );
}

export default EventList;
