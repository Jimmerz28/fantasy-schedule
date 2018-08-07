import React from 'react';

const Nav = ({ days }) => {

    const list = days.map(day => {
        return <li key={day}>
                <a href={`#${day}`}>
                    {day}
                </a>
            </li>;
    });

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    );
}

export default Nav;
