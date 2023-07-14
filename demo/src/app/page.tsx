'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table-scroll/dist/assets/index.min.css';
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
                            <td width="25%">Name</td>
                            <td width="25%"> Surname</td>
                            <td>ID</td>
                            <td width="25%">Name</td>
                            <td width="25%">Surname</td>
                            <td>ID</td>
                            <td width="25%">Name</td>
                            <td width="25%"> Surname</td>
                            <td>ID</td>
                            <td width="25%">Name</td>
                            <td width="25%">Surname</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(300)
                            .fill(null)
                            .map((item, index) => (
                                <tr key={index}>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                    <td>10000000000</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </ReactTableScroll>
        </Container>
    );
}
