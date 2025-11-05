
import React from 'react';

const ChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l-1 1H10L9 3zM4 9v6l1-1V10L4 9zm15 0l1 1v4l-1-1V9zM9 21h6l-1-1H10l-1 1zM4 15l1 1h14l1-1M9 7h6v10H9V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9V7a2 2 0 012-2h12a2 2 0 012 2v2m0 6v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
    </svg>
);

export default ChipIcon;
