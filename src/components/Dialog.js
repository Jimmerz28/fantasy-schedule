import React from 'react';

const Dialog = ({show, event}) => {

    const visible = {
        open: show
    };

    return (
        <dialog {...visible}></dialog>
    );
}

export default Dialog;
