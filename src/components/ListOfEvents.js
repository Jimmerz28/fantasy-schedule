// @flow
import React, { Component } from 'react';

import Event from "./Event";

type Props = {
    events: Array<GenConEvent>,
    favs: Array<string>,
    onEventClick: Function,
    onFav: Function
};

class ListOfEvents extends Component<Props> {

    shouldComponentUpdate(nextProps: Props) {
        if (nextProps.events.length === this.props.events.length ||
            nextProps.favs.length === this.props.favs.length) {
            return true;
        } else {
            return false;
        }
    }

    render() {

        const { events, favs, onEventClick, onFav } = this.props;

        const daysEvents = events.map(event => {

            const id = event["Game ID"];
            const isFav = favs.includes(id);

            // @TODO: Don't trigger the dialog if the favorite input is clicked
            return (
                <Event
                    key={id}
                    event={event}
                    isFav={isFav}
                    onClick={onEventClick}
                    onFav={onFav}
                />
            );
        });

        return (
            <ul>
                { daysEvents }
            </ul>
        );
    }
}

export default ListOfEvents;
