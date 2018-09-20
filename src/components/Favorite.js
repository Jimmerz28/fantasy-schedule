import classnames from "classnames/bind";
import React from "react";

import styles from "./Favorite.module.css";

let cx = classnames.bind(styles);

const Favorite = ({ id, onClick, name, checked = false }) => {

    const svgClasses = cx({
        "-checked": checked,
        star: true
    });

    return (
        <div className={styles.favorite}>
            <label htmlFor={id}>
                <span>Favorite</span>
                <svg className={svgClasses} role="presentation" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                    <path d="m12-1.7e-7 3.668 8.155l8.332 1.151-6.064 5.828 1.48 8.866-7.416-4.554-7.417 4.554 1.481-8.866-6.064-5.828 8.332-1.151z" />
                    <g strokeWidth="2">
                        <circle className={styles.explosion} cx="12" cy="12" r="12" />
                    </g>
                </svg>
            </label>
            <input
                type="checkbox"
                id={id}
                name={name}
                onChange={onClick}
                checked={checked}
            />
        </div>
    );
}

export default Favorite;
