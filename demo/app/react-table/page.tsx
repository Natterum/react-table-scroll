'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { useReactTable, ColumnResizeMode, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { Container } from 'react-bootstrap';
import { ReactTableScroll } from 'react-table-scroll';
import './table.scss';

type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};

const defaultData: Person[] = Array.from(Array(50)).map((e, i) => ({
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: i,
    status: 'In Relationship',
    progress: 50
}));

const defaultColumns: ColumnDef<Person>[] = [
    {
        header: 'Name',
        footer: (props) => props.column.id,
        columns: [
            {
                accessorKey: 'firstName',
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id
            },
            {
                accessorFn: (row) => row.lastName,
                id: 'lastName',
                cell: (info) => info.getValue(),
                header: () => <span>Last Name</span>,
                footer: (props) => props.column.id
            }
        ]
    },
    {
        header: 'Info',
        footer: (props) => props.column.id,
        columns: [
            {
                accessorKey: 'age',
                header: () => 'Age',
                footer: (props) => props.column.id
            },
            {
                header: 'More Info',
                columns: [
                    {
                        accessorKey: 'visits',
                        header: () => <span>Visits</span>,
                        footer: (props) => props.column.id
                    },
                    {
                        accessorKey: 'status',
                        header: 'Status',
                        footer: (props) => props.column.id
                    },
                    {
                        accessorKey: 'progress',
                        header: 'Profile Progress',
                        footer: (props) => props.column.id
                    }
                ]
            }
        ]
    }
];

const Page = () => {
    const [data, setData] = React.useState(() => [...defaultData]);
    const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);

    const [columnResizeMode, setColumnResizeMode] = React.useState<ColumnResizeMode>('onChange');

    const rerender = React.useReducer(() => ({}), {})[1];

    const table = useReactTable({
        data,
        columns,
        columnResizeMode,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true
    });

    return (
        <>
            <Container className="mt-4">
                <h1>React-table example</h1>
                <div className="table-container">
                    <select
                        value={columnResizeMode}
                        onChange={(e) => setColumnResizeMode(e.target.value as ColumnResizeMode)}
                        className="p-2 mb-4 form-control w-25">
                        <option value="onEnd">Resize: "onEnd"</option>
                        <option value="onChange">Resize: "onChange"</option>
                    </select>
                    <ReactTableScroll>
                        <table
                            className="table table-bordered table-hover table-striped"
                            {...{
                                style: {
                                    width: table.getCenterTotalSize()
                                }
                            }}>
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                {...{
                                                    key: header.id,
                                                    colSpan: header.colSpan,
                                                    style: {
                                                        width: header.getSize()
                                                    }
                                                }}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                                <div
                                                    {...{
                                                        onMouseDown: header.getResizeHandler(),
                                                        onTouchStart: header.getResizeHandler(),
                                                        className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                                                        style: {
                                                            transform:
                                                                columnResizeMode === 'onEnd' && header.column.getIsResizing()
                                                                    ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
                                                                    : ''
                                                        }
                                                    }}
                                                />
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                {...{
                                                    key: cell.id,
                                                    style: {
                                                        width: cell.column.getSize()
                                                    }
                                                }}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ReactTableScroll>
                </div>
            </Container>
        </>
    );
};

export default Page;
