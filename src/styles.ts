import { CSSProperties } from 'react';

export const rtsTableWrapper: CSSProperties = {
    position: 'relative',
    width: '100%'
};

export const rtsTableContainer: CSSProperties = {
    minWidth: 'fit-content',
    position: 'relative'
};

export const rtsTableScrollWrapper: CSSProperties = {
    overflowX: 'scroll',
    overflowY: 'hidden',
    width: '100%',
    position: 'sticky',
    bottom: 0
};

export const rtsTableScrollContent: CSSProperties = {
    height: '1px',
    width: 0
};
