// @flow

import React from 'react';

import type { VanillaEvent } from '../types';
import styles from './Dialog.module.css';
import EventDetail from './EventDetail';

const Dialog = ({ show, event, onClose }: { show: boolean, event: VanillaEvent, onClose: Function }) => {
    return (
        <dialog className={styles["event-dialog"]}>
            <section>
                <button type="button" onClick={onClose}>Close</button>
                <EventDetail event={event} />
            </section>
        </dialog>
    );
}

export default Dialog;
