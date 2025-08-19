'use client'
import React, { useEffect } from 'react';
import AuthContextProvider, { useAuthContext } from '@/context/auth';
import TitleBar from '@/components/TitleBar';

function AuthContainer() {

    const { authenticated } = useAuthContext();

    useEffect(() => {
        console.log(authenticated)
    }, [])
    return (
        <>
            <TitleBar />
        </>
    );
}

export default function LandingPage() {
        
        return (
        <AuthContextProvider>
            <AuthContainer />
        </AuthContextProvider>
    )
}