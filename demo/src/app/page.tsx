'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactTableScroll } from 'react-table-scroll';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <Container fluid className="p-5">
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
            </ReactTableScroll>
        </Container>
    );
}
