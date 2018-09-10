// @flow

import * as React from 'react';

import type { VanillaEvent } from '../types';
import styles from './Dialog.module.css';
import EventDetail from './EventDetail';
import EventList from "./EventList";

const Dialog = ({ show, event, onClose, relatedEvents }: {
            show: boolean,
            event: VanillaEvent,
            onClose: Function,
            relatedEvents: React.Element<typeof EventList>
        }) => {

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
