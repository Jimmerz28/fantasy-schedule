import React from "react";
import styles from "./Events.module.css";

const Events = ({ children }) => {
    return (
        <div className={styles.events}>
            {children}
        </div>
    );
}

export default Events;
