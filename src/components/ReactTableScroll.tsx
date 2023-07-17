'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { rtsTableContainer, rtsTableScrollContent, rtsTableScrollWrapper, rtsTableWrapper } from '../styles';

interface IProps {
    children: any;
}

const ReactTableScroll = ({ children }: IProps) => {
    const [horizontalScrollStyle, setHorizontalScrollStyle] = useState<object>({});
    const horizontalScrollRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const tableContainerRef = useRef<HTMLDivElement | null>(null);
    const tableWrapperRef = useRef<HTMLDivElement | any>(null);
    const { width, height } = useResizeDetector({ targetRef: tableContainerRef });

    const diffSizes = (): boolean => {
        if (tableContainerRef?.current && targetRef?.current) {
            return tableContainerRef.current?.clientWidth > targetRef.current?.clientWidth;
        }
        return false;
    };

    const handleResize = () => {
        const setValue = (value: number) => {
            setHorizontalScrollStyle({ width: value });
        };
        if (diffSizes()) {
            setValue(tableContainerRef.current?.clientWidth ?? 0);
        } else {
            setValue(0);
        }
    };

    const onTableHorizontalScroll = () => {
        const posX: number = horizontalScrollRef.current?.scrollLeft ?? 0;
        const posY: number = horizontalScrollRef.current?.scrollTop ?? 0;
        if (tableWrapperRef?.current) {
            tableWrapperRef.current.scrollTo(posX, posY);
        }
    };

    useEffect(() => {
        handleResize();
    }, [width, height]);

    return (
        <div ref={targetRef}>
            <div style={rtsTableWrapper} ref={tableWrapperRef}>
                <div style={rtsTableContainer} ref={tableContainerRef}>
                    {children}
                </div>
            </div>
            {diffSizes() && (
                <div style={rtsTableScrollWrapper} ref={horizontalScrollRef} onScroll={onTableHorizontalScroll}>
                    <div style={{ ...rtsTableScrollContent, ...horizontalScrollStyle }}></div>
                </div>
            )}
        </div>
    );
};

export default ReactTableScroll;
