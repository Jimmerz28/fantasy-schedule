import classNames from "classnames/bind";
import React from 'react';
import CancelIcon from "./CancelIcon.js";
import styles from './Tags.module.css';

let cx = classNames.bind(styles);

const TagList = ({tags, selectedTags, onTagSelection}) => {

    const list = tags.map(tag => {
        const checked = selectedTags.includes(tag);
        const classes = cx({
            '-checked': checked,
            tag: true
        });

        return (
            <div key={tag} className={classes}>
                <label htmlFor={tag}>{tag.slice(6)}</label>
                <input type="checkbox" name={tag} id={tag} onChange={onTagSelection} checked={checked} />
                <CancelIcon />
            </div>
        );
    });

    return <form className={styles.tags}>{ list }</form>;
};

export default TagList;
