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

    componentDidMount = () => {
        console.info("mounted");
    }

    onClick = (event) => {
        this.setState({ activeDay: event.target.hash });
    }

    render() {

        const { days } = this.props;

        const list = days.map(({ value, formatted }: { value: string, formatted: string }) => {

            const href = `#${formatted}`.replace(" ", "-");

            const classes = classNames({ [styles["-active"]]: (href === this.state.activeDay) });

            return <li key={value}>
                    <a href={ href } onClick={this.onClick} className={classes}>
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
