'use client'
import LoginCard from "@/components/onboardingForm";
import AuthContextProvider from "@/context/auth";

export default function LoginPage() {
    return (
        <AuthContextProvider>
            <LoginCard />
        </AuthContextProvider>
    );
}