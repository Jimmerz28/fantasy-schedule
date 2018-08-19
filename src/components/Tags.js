import classNames from "classnames/bind";
import React from 'react';
import styles from './Tags.module.css';

let cx = classNames.bind(styles);

const TagList = ({tags, selectedTags, onTagSelection}) => {

    const list = tags.map(({tag, color}) => {

        const checked = selectedTags.includes(tag);
        const classes = cx({
            '-checked': checked,
            tag: true
        });

        return (
            <div key={tag} className={classes} style={{'--tag-color': color }}>
                <label htmlFor={tag}><span>{tag.slice(6)}</span></label>
                <input type="checkbox" name={tag} id={tag} onChange={onTagSelection} checked={checked} />
            </div>
        );
    });

    return <form className={styles.tags}>{ list }</form>;
};

export default TagList;
