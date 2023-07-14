'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { TableScroll } from 'react-table-scroll';
import { Container } from 'react-bootstrap';

export default function Home() {

    return (
    <Container className="p-5">
        <TableScroll>
            <table width="100%" className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <td >ID</td>
                    <td width="25%">Name</td>
                    <td width="25%"> Surname</td>
                    <td>ID</td>
                    <td width="25%">Name</td>
                    <td width="25%">Surname</td>
                </tr>
                </thead>
                <tbody>
                {Array(100).fill(null).map((item, index) => (
                    <tr key={index}>
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
        </TableScroll>
    </Container>
  )
}
