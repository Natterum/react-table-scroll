'use client'

import React, { useState } from 'react'

type Props = {
    value?: number
}
const TableScroll = ({ value = 0 }: Props) => {
    const [counter, setCounter] = useState<number>(value ?? 0);

    const onMinus = () => {
        setCounter((prev) => prev - 1)
    };

    const onPlus = () => {
        setCounter((prev) => prev + 1)
    };

    return (
        <div>
            <h1>Countersssss: {counter}</h1>
            <button onClick={onMinus}>-</button>
            <button onClick={onPlus}>+</button>
        </div>
    )
}

export default TableScroll
