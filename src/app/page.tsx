'use client'

import { useRouter } from 'next/navigation';  // Correct hook for App Router
import React, { useEffect, useState } from 'react';
import Dashboard from './(year)/dashboard';
import { getUser } from '@/api/User';

export default function LandingPage() {
    const [user, setUser] = useState(null);
    const router = useRouter();

const getUserFunction = async () => {
    try {
        const res = await getUser();
        setUser(res);
    } catch (e: unknown) {
        console.log(e);

        if (typeof e === 'object' && e !== null && 'status' in e) {
            const status = (e as { status?: number }).status;
            if (status === 401) {
                router.push('/login');
            }
        } else {
            console.error('Unexpected error:', e);
        }
    }
};

    useEffect(() => {
        getUserFunction();
    }, []);

    return (
        <>
            <h1>Test</h1>
            {user && <Dashboard />}
        </>
    );
}
