'use client';

import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { rtsTableContainer, rtsScrollContent, rtsScrollWrapper, rtsTableWrapper } from '../styles';

interface IProps {
    children: any;
    tableWrapperStyle?: CSSProperties | undefined;
    tableContainerStyle?: CSSProperties | undefined;
    scrollWrapperStyle?: CSSProperties | undefined;
    scrollContentStyle?: CSSProperties | undefined;
    tableWrapperClass?: string;
    tableContainerClass?: string;
    scrollWrapperClass?: string;
    scrollContentClass?: string;
}

const ReactTableScroll = ({
    children,
    scrollContentStyle,
    scrollWrapperStyle,
    tableWrapperStyle,
    tableContainerStyle,
    scrollContentClass,
    tableContainerClass,
    tableWrapperClass,
    scrollWrapperClass
}: IProps) => {
    const [horizontalScrollStyle, setHorizontalScrollStyle] = useState<object>({});
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    const horizontalScrollRef = useRef<HTMLDivElement | any>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const tableContainerRef = useRef<HTMLDivElement | null>(null);
    const tableWrapperRef = useRef<HTMLDivElement | any>(null);
    const startTouchXPoint = useRef<number>(0);
    const startScrollXPoint = useRef<number>(0);

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

    const onTouchMove = (e: TouchEvent) => {
        if (startTouchXPoint.current === 0) startTouchXPoint.current = e.touches[0].clientX;
        if (startScrollXPoint.current === 0) startScrollXPoint.current = tableWrapperRef.current?.scrollLeft;

        const offsetX = e.touches[0].clientX - startTouchXPoint.current;

        if (horizontalScrollRef?.current) {
            horizontalScrollRef.current.scrollTo(startScrollXPoint.current - offsetX, 0);
        }
    };

    const onTouchEnd = () => {
        startTouchXPoint.current = 0;
        startScrollXPoint.current = 0;
        removeEventListeners();
    };

    const addEventListeners = () => {
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
    };

    const removeEventListeners = () => {
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
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
                    className={tableWrapperClass}
                    style={{ ...rtsTableWrapper, overflowX: isMobileDevice ? 'scroll' : 'hidden', ...tableWrapperStyle }}
                    ref={tableWrapperRef}
                    onTouchStart={() => {
                        setIsMobileDevice(true);
                    }}
                    onTouchEnd={() => {
                        setIsMobileDevice(false);
                        onTableHorizontalScroll();
                    }}>
                    <div
                        className={tableContainerClass}
                        style={{ ...rtsTableContainer, ...tableContainerStyle }}
                        ref={tableContainerRef}
                        onTouchStart={() => {
                            addEventListeners();
                        }}>
                        {children}
                    </div>
                </div>
                {diffSizes() && (
                    <div
                        className={scrollWrapperClass}
                        style={{ ...rtsScrollWrapper, height: isMobileDevice ? '0px' : 'auto', ...scrollWrapperStyle }}
                        ref={horizontalScrollRef}
                        onScroll={onHorizontalScroll}>
                        <div
                            className={scrollContentClass}
                            style={{ ...rtsScrollContent, ...scrollContentStyle, ...horizontalScrollStyle }}></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ReactTableScroll;
