// @flow

import React from 'react';

import type { VanillaEvent } from '../types';
import styles from './Dialog.module.css';
import EventDetail from './EventDetail';

const Dialog = ({ show, event, onClose, relatedEvents }:
        { show: boolean, event: VanillaEvent, onClose: Function, relatedEvents: Array<VanillaEvent> }) => {
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
