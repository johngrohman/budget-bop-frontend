import React from "react";
import TitleBar from "@/components/TitleBar";
import { ToastProvider } from "@/components/ToastSystem";

export default function AppLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {

    return (
        <html lang="en">
            <body
                className='content'
            >
                <ToastProvider>
                    <TitleBar />
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}
