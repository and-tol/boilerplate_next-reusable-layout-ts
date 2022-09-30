import Link from 'next/link';
import { useEffect } from 'react';
import type { ReactElement } from 'react';

import Vercel from 'public/vercel.svg';

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
                <Vercel fill='red' width='100' />
                <div> Header</div>
                <Link href="/">Home</Link>
                <br />
                <Link href="/about">About</Link>
            </header>
        </>
    );
};
