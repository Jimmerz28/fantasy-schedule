import React from 'react';

const TagList = ({tags, onTagSelection}) => {

    const list = tags.map(tag => (
        <div key={tag}>
            <label htmlFor={tag}>{tag}</label>
            <input type="checkbox" name={tag} id={tag} onChange={onTagSelection}/>
        </div>
    ));

    return <form>{ list }</form>;
};

export default TagList;
