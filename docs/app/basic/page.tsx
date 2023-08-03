'use client';

import React from 'react';
import { ReactTableScroll } from 'react-table-scroll';
import { Container } from 'react-bootstrap';

const Page = () => {
    return (
        <>
            <Container className="mt-4">
                <h1>React-table example</h1>
                <div className="table-container">
                    <ReactTableScroll>
                        <table width="100%" className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td width="5%">Name</td>
                                    <td width="5%">Last Name</td>
                                    <td width="5%">Surname</td>
                                    <td width="25%">Passport ID</td>
                                    <td width="25%">Company</td>
                                    <td width="25%">Address</td>
                                    <td width="25%">Country</td>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(100)
                                    .fill(null)
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>Michel</td>
                                            <td>James</td>
                                            <td>Jackson</td>
                                            <td>1123&nbsp;1234</td>
                                            <td>Big&nbsp;Hot&nbsp;Dog</td>
                                            <td>Ap&nbsp;#190-9925&nbsp;n&nbsp;Road</td>
                                            <td>USA,&nbsp;Florida</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        <div className="text-center">Demo</div>
                    </ReactTableScroll>
                </div>
            </Container>
        </>
    );
};

export default Page;
