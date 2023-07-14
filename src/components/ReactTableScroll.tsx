'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

interface IProps {
    children: any;
}

const ReactTableScroll = ({ children }: IProps) => {
    const [horizontalScrollStyle, setHorizontalScrollStyle] = useState<object>({});
    const horizontalScrollRef = useRef<HTMLDivElement | any>(null);
    const targetRef = useRef<HTMLDivElement | any>(null);
    const { width, height } = useResizeDetector({ targetRef });
    const tableWrapperRef = useRef<HTMLDivElement | any>(null);
    const [tableLeftPos, setTableLeftPos] = useState<number>(0);

    const diffSizes = (): boolean => {
        return tableWrapperRef.current?.clientWidth > targetRef.current?.clientWidth;
    };

    const handleResize = () => {
        const setValue = (value: number) => {
            setHorizontalScrollStyle({ width: value });
        };
        if (diffSizes()) {
            setValue(tableWrapperRef.current?.clientWidth);
        } else {
            setValue(0);
        }
    };

    const onTableHorizontalScroll = () => {
        const posX: number = horizontalScrollRef.current?.scrollLeft ?? 0;
        setTableLeftPos(posX);
    };

    useEffect(() => {
        handleResize();
    }, [width, height]);

    return (
        <div className="rts__wrapper" ref={targetRef}>
            <div className="rts-table__wrapper">
                <div className="rts-table__container" ref={tableWrapperRef} style={{ left: -tableLeftPos }}>
                    {children}
                </div>
            </div>
            {diffSizes() && (
                <div className="rts-table-scroll__wrapper" ref={horizontalScrollRef} onScroll={onTableHorizontalScroll}>
                    <div className="rts-table-scroll__content" style={horizontalScrollStyle}></div>
                </div>
            )}
        </div>
    );
};

export default ReactTableScroll;
