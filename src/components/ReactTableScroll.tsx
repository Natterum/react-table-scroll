'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { rtsTableContainer, rtsScrollContent, rtsScrollWrapper, rtsTableWrapper } from '../styles';

interface IProps {
    children: any;
}

const ReactTableScroll = ({ children }: IProps) => {
    const [horizontalScrollStyle, setHorizontalScrollStyle] = useState<object>({});
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    const horizontalScrollRef = useRef<HTMLDivElement | any>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const tableContainerRef = useRef<HTMLDivElement | null>(null);
    const tableWrapperRef = useRef<HTMLDivElement | any>(null);

    const { width, height } = useResizeDetector({ targetRef: tableContainerRef });

    const MobileDeviceDetector = () => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        setIsMobileDevice(isMobile);
    };

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

    const onHorizontalScroll = () => {
        const posX: number = horizontalScrollRef.current?.scrollLeft ?? 0;
        const posY: number = horizontalScrollRef.current?.scrollTop ?? 0;
        if (tableWrapperRef?.current) {
            tableWrapperRef.current.scrollTo(posX, posY);
        }
    };

    const onTableHorizontalScroll = () => {
        const posX: number = tableWrapperRef.current?.scrollLeft ?? 0;
        const posY: number = tableWrapperRef.current?.scrollTop ?? 0;
        if (horizontalScrollRef?.current) {
            horizontalScrollRef.current.scrollTo(posX, posY);
        }
    };

    useEffect(() => {
        handleResize();
        MobileDeviceDetector();
    }, [width, height]);

    useEffect(() => {
        MobileDeviceDetector();
    }, []);

    return (
        <>
            <div ref={targetRef}>
                <div
                    style={{ ...rtsTableWrapper, overflowX: isMobileDevice ? 'scroll' : 'hidden' }}
                    ref={tableWrapperRef}
                    onTouchStart={() => setIsMobileDevice(true)}
                    onTouchEnd={() => {
                        setIsMobileDevice(false);
                        onTableHorizontalScroll();
                    }}>
                    <div style={rtsTableContainer} ref={tableContainerRef}>
                        {children}
                    </div>
                </div>
                {diffSizes() && (
                    <div
                        style={{ ...rtsScrollWrapper, height: isMobileDevice ? '0px' : 'auto' }}
                        ref={horizontalScrollRef}
                        onScroll={onHorizontalScroll}>
                        <div style={{ ...rtsScrollContent, ...horizontalScrollStyle }}></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ReactTableScroll;
