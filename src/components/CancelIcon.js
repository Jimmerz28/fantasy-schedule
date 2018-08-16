import React from "react";

const CancelIcon = props => (
  <svg viewBox="0 0 95 95" width="1em" height="1em" {...props}>
    <switch transform="translate(-2.5 -2.5)">
      <g>
        <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm17.7 56.9c2.3 2.3 2.3 6 0 8.3-1.1 1.1-2.6 1.7-4.1 1.7s-3-.6-4.1-1.7L50 58.3l-9.4 9.4c-1.1 1.1-2.6 1.7-4.1 1.7s-3-.6-4.1-1.7c-2.3-2.3-2.3-6 0-8.3l9.4-9.4-9.4-9.4c-2.3-2.3-2.3-6 0-8.3s6-2.3 8.3 0l9.4 9.4 9.4-9.4c2.3-2.3 6-2.3 8.3 0s2.3 6 0 8.3L58.3 50z" />
      </g>
    </switch>
  </svg>
);

export default CancelIcon;
