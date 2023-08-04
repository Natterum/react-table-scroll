import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export const metadata: Metadata = {
    title: 'React table scroll',
    description: 'Component for displaying a floating scroll from below for a table in React'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
