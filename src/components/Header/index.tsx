import Link from 'next/link';
import { useEffect } from 'react';
import type { ReactElement } from 'react';

export const Header = (): ReactElement => {
    useEffect(() => {
        console.log('Header mounted');

        return () => {
            console.log('Hedear unmounted');
        };
    }, []);

    return (
        <>
            <header>
                <div> Header</div>
                <Link href="/">Home</Link>
                <br />
                <Link href="/about">About</Link>
            </header>
        </>
    );
};
