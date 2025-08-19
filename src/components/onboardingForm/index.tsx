'use client'
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "./loginCard";
import SignUpForm from "./signUpCard";
import { useAuthContext } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function LoginCard() {

    const [loggingIn, setLoggingIn] = useState(false);
    const { accessToken } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        console.log('here', accessToken);
        if (accessToken) {
            router.push('/');
        }
    }, [])

    return (
        <Modal
            show={true}
            centered
            animation={false}
        >
            <Modal.Body className="p-4">
                {
                    loggingIn ?
                    <LoginForm setLoggingIn={setLoggingIn} />:
                    <SignUpForm setLoggingIn={setLoggingIn} />
                }
            </Modal.Body>
        </Modal>
    );
}