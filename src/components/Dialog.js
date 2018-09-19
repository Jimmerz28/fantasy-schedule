// @flow

import * as React from 'react';

import type { VanillaEvent } from '../types';
import DaysList from "./DaysList";
import styles from './Dialog.module.css';
import EventDetail from './EventDetail';

type Props = {
    event: VanillaEvent,
    onClose: Function,
    relatedEvents: React.Element<typeof DaysList>
};

const Dialog = ({ event, onClose, relatedEvents }: Props) => {

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
