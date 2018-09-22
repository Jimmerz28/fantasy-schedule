// @flow

import React, { Component } from "react";

import { headerDateFormat } from "../constants";
import { createDayID } from "../helpers";
import styles from "./DaysList.module.css";
import ListOfEvents from "./ListOfEvents";

type Props = {
    events: Array<DaysEvents>,
    onFav: Function,
    favs: Array<string>,
    onEventClick: Function
}

class DaysList extends Component<Props> {

    render() {
        const list = this.props.events.map(({ day, events }) => {
            return (
                <li key={day} id={createDayID(day, headerDateFormat)}>
                    <h2>{day}</h2>
                    <ListOfEvents
                        events={ events }
                        favs={ this.props.favs }
                        onFav={ this.props.onFav }
                        onEventClick={ this.props.onEventClick }
                    />
                </li>
            );
        });

        return <ul className={styles["event-list"]}>{list}</ul>;
    }
}

export default DaysList;
