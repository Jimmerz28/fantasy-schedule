// @flow

import * as React from "react";

import styles from "./AllEvents.module.css";
import DaysList from "./DaysList";

type Props = {
    children: React.Element<typeof DaysList>
}

const Events = ({ children }: Props) => {
    return (
        <div className={styles.events}>
            {children}
        </div>
    );
}

export default Events;
