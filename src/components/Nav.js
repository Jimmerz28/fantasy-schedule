import React from 'react';

const Nav = ({ days }) => {

    const list = days.map(day => {
        return <li key={day}>
                <a>
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
