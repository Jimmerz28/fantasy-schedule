// @flow
import React from 'react';
import type { NaviDay } from "../types";

const Nav = ({ days }: { days: Array<NaviDay>}) => {

    const list = days.map(({ value, formatted }: { value: string, formatted: string }) => {
        return <li key={value}>
                <a href={`#${value}`}>{formatted}</a>
            </li>;
    });

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    );
}

export default Nav;
