'use client';

import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    return (
        <Container>
            <h1 className="text-center mt-4">React-table-scroll</h1>
            <h2 className="text-center mt-4 mb-5">Examples</h2>
            <div class="d-sm-flex flex-wrap gap-4">
                <div className="card mb-3" style={{ flex: '1 0 200px' }}>
                    <div className="card-body">
                        <h5 className="card-title">Basic</h5>
                        <p className="card-text">Basic example with a simple table</p>
                        <a href="#" className="btn btn-primary" onClick={() => router.push('/basic')}>
                            Go to example
                        </a>
                    </div>
                </div>
                <div className="card mb-3" style={{ flex: '1 0 200px' }} onClick={() => router.push('/react-table')}>
                    <div className="card-body">
                        <h5 className="card-title">TanStack Table</h5>
                        <p className="card-text">TanStack Table example with the resizing of columns</p>
                        <a href="#" className="btn btn-primary">
                            Go to example
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}