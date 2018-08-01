import React from 'react';

const TagList = ({tags}) => {

    const list = tags.map(tag => (
        <div key={tag}>
            <label htmlFor="tag">{tag}</label>
            <input type="checkbox" name={tag} id={tag} />
        </div>
    ));

    return <div>{ list }</div>;
};

export default TagList;
