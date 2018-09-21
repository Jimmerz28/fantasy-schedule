// @flow

import * as React from "react";

import styles from "./Dialog.module.css";
import EventDetail from "./EventDetail";
import RelatedEvents from "./RelatedEvents";

type Props = {
    event: GenConEvent,
    onClose: Function,
    relatedEvents: React.Element<typeof RelatedEvents>
};

const Dialog = ({ event, onClose, relatedEvents }: Props) => {

    return (
        <dialog className={ styles["event-dialog"] }>
            <section>
                <button type="button" onClick={ onClose }>Close</button>
                { event  &&
                    <EventDetail event={ event } relatedEvents={ relatedEvents }/> }
            </section>
        </dialog>
    );
}

export default Dialog;
