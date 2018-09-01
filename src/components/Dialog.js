// @flow

import EventDetail from "./EventDetail";
import React from 'react';
import type { VanillaEvent } from '../types';

const Dialog = ({ show, event, onClose }: { show: boolean, event: VanillaEvent, onClose: Function }) => {

    // If the user hasn't selected an event don't even bother rendering
    if (!event) {
        return null;
    }

    const visible = {
        open: (show === true) ? true : null
    };

    return (
        <dialog {...visible}>
            <section>
                <button type="button" onClick={onClose}>Close</button>
                <EventDetail event={event} />
            </section>
        </dialog>
    );
}

export default Dialog;
