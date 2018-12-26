// @flow

import classNames from "classnames/bind";
import React from 'react';
import styles from './Tags.module.css';

let cx = classNames.bind(styles);

type Props = {
    tags: Array<string>,
    selectedTags: Array<string>,
    onTagSelection: Function,
    colors: Array<Color>
};

const TagList = ({tags, selectedTags, onTagSelection, colors}: Props) => {

    const list = tags.map(tag => {

        const checked = selectedTags.includes(tag);
        const classes = cx({
            '-checked': checked,
            tag: true
        });
        const currentColor: ?Color = colors.find(color => color.tag === tag);

        return (
            <div key={tag} className={classes} style={{'--tag-color': currentColor && currentColor.color}}>
                <label htmlFor={tag}><span>{tag.slice(6)}</span></label>
                <input type="checkbox" name={tag} id={tag} onChange={onTagSelection} checked={checked} />
            </div>
        );
    });

    return (
        <div className={styles.tags}>
            <form>{list}</form>
        </div>
    );
};

export default TagList;
