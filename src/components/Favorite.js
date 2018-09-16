import React from "react";

import styles from "./Favorite.module.css";

const Favorite = ({ id, onClick, name, checked = false}) => (
    <label className={styles.favorite} htmlFor={id}>
        <span>Favorite</span>
        <input
            type="checkbox"
            id={id}
            name={name}
            onChange={onClick}
            checked={checked}
        />
    </label>

);

export default Favorite;
