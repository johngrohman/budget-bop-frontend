'use client';
import { CreateUserSchema } from "@/types";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function SignUpForm({setLoggingIn}: {setLoggingIn: Function}) {
    const [data, setData] = useState<CreateUserSchema>();

    return (
        <Form>
            <h3>Sign Up</h3>
            <Row>
                <Form.Group>
                    <Form.Text>Username</Form.Text>
                    <Form.Control
                        type="text"
                    />
                </Form.Group>
            </Row>
            <br />
            <Row>
                <Form.Group>
                    <Form.Text>Password</Form.Text>
                    <Form.Control
                        type="text"
                    />
                </Form.Group>
            </Row>
            <br />
            <Row className="d-flex justify-content-between">
                <Col>
                    <Button
                        variant="link"
                        onClick={() => setLoggingIn(true)}
                    >
                        Login
                    </Button>
                </Col>
                <Col>
                    <Button>
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}