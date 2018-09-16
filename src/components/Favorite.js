import classnames from "classnames/bind";
import React from "react";

import styles from "./Favorite.module.css";

let cx = classnames.bind(styles);

const Favorite = ({ id, onClick, name, checked = false}) => {

    const svgClasses = cx({
        "-checked": checked,
        star: true
    });

    return (
        <div className={styles.favorite}>
            <label htmlFor={id}>
                <span>Favorite</span>
                <svg className={svgClasses} role="presentation" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M12 0l3.668 8.155 8.332 1.151-6.064 5.828 1.48 8.866-7.416-4.554-7.417 4.554 1.481-8.866-6.064-5.828 8.332-1.151z" />
                    <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
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
