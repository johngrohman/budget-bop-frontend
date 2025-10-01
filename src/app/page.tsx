'use client'
import React, { useEffect } from 'react';
import AuthContextProvider, { useAuthContext } from '@/context/auth';
import TitleBar from '@/components/TitleBar';
import Dashboard from './(year)/dashboard';

function AuthContainer() {

    const { authenticated } = useAuthContext();
    
    console.log('here', authenticated);
    if (authenticated) {
        return (
            <>
                <Dashboard />
            </>
        );
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
    )
}