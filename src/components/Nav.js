// @flow

import classNames from "classnames";
import React, { Component } from 'react';

import type { NaviDay } from "../types";
import styles from "./Nav.module.css";

type P = {
    days: Array<NaviDay>
};

type S = {
    activeDay: string;
};

class Nav extends Component<P, S> {

    state = {
        activeDay: ''
    };

    onClick = ({ target: { hash } }: { target: HTMLAnchorElement }) => {
        this.setState({ activeDay: hash });
    }

    render() {

        const { days } = this.props;

        const list = days.map(({ value, formatted }: { value: string, formatted: string }, i) => {

            const href = `#${formatted}`.replace(" ", "-");

            // If no date is chosen mark the first as "active"
            const classes = classNames({
                [styles["-active"]]: (this.state.activeDay === '' && i === 0) || (this.state.activeDay === href)
            });

            return <li key={value} className={classes}>
                    <a href={href} onClick={this.onClick}>
                        {formatted}
                    </a>
                </li>;
        });

        return (
            <nav className={styles["event-days"]}>
                <ul>{list}</ul>
            </nav>
        );
    }
}

export default Nav;
