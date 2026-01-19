'use client';
import React from 'react';
import AuthContextProvider, { useAuthContext } from '@/context/auth';
import Dashboard from './(year)/dashboard';

function AuthContainer() {

    const { authenticated } = useAuthContext();

    if (authenticated) {
        return (<Dashboard />);
    } else {
        return (
            <div></div>
        );
    }
}

export default function LandingPage() {
        
    return (
        <AuthContextProvider>
            <AuthContainer />
        </AuthContextProvider>
    );
}