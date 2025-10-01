'use client'
import { login } from "@/api/Auth";
import { useAuthContext } from "@/context/auth";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function LoginForm({setLoggingIn}: {setLoggingIn: Function}) {

    const router = useRouter();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const { authenticated, setAuthenticated, handleLogin } = useAuthContext();

    const handleSubmit = async () => {
        await handleLogin({username, password});
    }

    useEffect(() => {
        if (authenticated) {
            console.log(authenticated)
            router.push('/');
        }
    }, [authenticated]);

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Row>
                <Form.Group>
                    <Form.Text>Username</Form.Text>
                    <Form.Control
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
            </Row>
            <br />
            <Row>
                <Form.Group>
                    <Form.Text>Password</Form.Text>
                    <Form.Control
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
            </Row>
            <br />
            <Row className="d-flex justify-content-between">
                <Col>
                    <Button
                        variant="link"
                        onClick={() => setLoggingIn(false)}
                    >
                        Sign Up
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={handleSubmit}
                    >
                        Log In
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}