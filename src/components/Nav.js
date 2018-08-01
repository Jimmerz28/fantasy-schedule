import React from 'react';

const Nav = ({ days }) => {

    const list = days.map(day => <li key={day}>{day.toString()}</li>);

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    );
}

export default Nav;
