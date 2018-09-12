// @flow

import * as React from 'react';

import type { VanillaEvent } from '../types';
import styles from './Dialog.module.css';
import EventDetail from './EventDetail';
import EventList from "./EventList";

type Props = {
    show: boolean,
    event: VanillaEvent,
    onClose: Function,
    relatedEvents: React.Element<typeof EventList>
};

const Dialog = ({ show, event, onClose, relatedEvents }: Props) => {

    return (
        <dialog className={ styles["event-dialog"] }>
            <section>
                <button type="button" onClick={onClose}>Close</button>
                { event  &&
                    <EventDetail event={event} relatedEvents={relatedEvents}/> }
            </section>
        </dialog>
    );
}

export default Dialog;
