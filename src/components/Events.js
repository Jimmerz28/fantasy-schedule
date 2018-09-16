// @flow

import * as React from "react";

import EventList from "./EventList";
import styles from "./Events.module.css";

type Props = {
    children: React.Element<typeof EventList>
}

const Events = ({ children }: Props) => {
    return (
        <div className={styles.events}>
            {children}
        </div>
    );
}

export default Events;
