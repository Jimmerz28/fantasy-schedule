// @flow

import React from 'react';

import { headerDateFormat } from "../constants";
import { createDayID } from "../helpers";
import Event from './Event';
import type { DaysEvents } from "../types";

type Props = {
    events: Array<DaysEvents>,
    onFav: Function,
    favs: Array<string>,
    onEventClick: Function
}

const EventList = ({ events, onFav, favs, onEventClick }: Props) => {

    const list = events.map(({ day, events }) => {

        const daysEvents = events.map(event => {

                const id = event["Game ID"];
                const isFav = favs.includes(id);

                // @TODO: Don't trigger the dialog if the favorite input is clicked
                return (
                    <Event
                        key={ id }
                        event={ event }
                        isFav={ isFav }
                        onClick={ onEventClick }
                        onFav={ onFav }
                    />
                );
            });

        return (
            <li key={day} id={ createDayID(day, headerDateFormat) }>
                <h2>{day}</h2>
                <ul>{daysEvents}</ul>
            </li>
        );

    });

    return <ul>{list}</ul>;
}

export default EventList;
