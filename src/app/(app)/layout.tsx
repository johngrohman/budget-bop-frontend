'use client';
import React, { useState } from "react";
import TitleBar from "@/components/TitleBar";
import { ToastProvider } from "@/components/ToastSystem";
import SideNav from "@/components/SideNav";
import './styles.scss';
import UserCard from "@/components/UserCard";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Container } from "react-bootstrap";

const queryClient = new QueryClient();

export default function AppLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {

    const [showNav, setShowNav] = useState(false);
    const [showUser, setShowUser] = useState(false);

    return (
        <div
        >
            <QueryClientProvider client={queryClient}>
                <ToastProvider>
                    <TitleBar
                        showNav={showNav}
                        setShowNav={setShowNav}
                        showUser={showUser}
                        setShowUser={setShowUser}
                    />
                    <UserCard
                        showModal={showUser}
                        setShowModal={setShowUser}
                    />
                    <div className="content_nav_container">
                        <SideNav show={showNav} setShow={setShowNav}/>
                        <div className={`content_container ${showNav?'nav_shown':'nav_hidden'}`}>
                            <div className='content'>
                                {children}
                            </div>
                        </div>
                    </div>
                </ToastProvider>
            </QueryClientProvider>
        </div>
    );
}
