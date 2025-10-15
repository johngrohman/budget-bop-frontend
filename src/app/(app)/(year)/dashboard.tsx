'use client';
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getYears } from "../../../api/Year";
import { YearSchema } from "@/types";
import { useAuthContext } from "@/context/auth";
import "./[year_id]/styles.scss";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ToastSystem";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    const getYearsQuery = useQuery({
        queryKey: ['getYears'],
        queryFn: getYears,
        initialData: [],
    });

    return (
        <Container fluid>
            <h2>Welcome back</h2>
            <Row>
                {
                    getYearsQuery.data.map((year: YearSchema, index: number) => (
                        <Col key={index}>
                            <div
                                onClick={() => router.push(`/${year.id}`)}
                            >
                                <Card>
                                    {year.year}
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}