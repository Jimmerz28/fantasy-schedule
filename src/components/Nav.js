// @flow

import React, { Component } from 'react';

import type { NaviDay } from "../types";
import classNames from "classnames";
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

    componentDidMount = () => {
        console.info("mounted");
    }

    onClick = ({ target } : { target: HTMLAnchorElement }) => {
        this.setState({ activeDay: target.hash });
    }

    render() {

        const { days } = this.props;

        const list = days.map(({ value, formatted }: { value: string, formatted: string }) => {

            const href = `#${formatted}`.replace(" ", "-");

            const classes = classNames({ [styles["-active"]]: (href === this.state.activeDay) });

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
