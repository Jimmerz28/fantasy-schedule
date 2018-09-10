// @flow

import * as React from "react";
import styles from "./Events.module.css";

const Events = ({ children }: { children: React.Element<typeof EventList>}) => {
    return (
        <div className={styles.events}>
            {children}
        </div>
    );
}

export default Events;
