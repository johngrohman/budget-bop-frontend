'use client';
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getYears } from "../../api/Year";
import { YearSchema } from "@/types";
import { useAuthContext } from "@/context/auth";

export default function Dashboard() {
    const [years, setYears] = useState<YearSchema[]>([]);
    
    const { accessToken } = useAuthContext();
    console.log(accessToken);

    const getYearsData = () => {
        getYears(accessToken)
            .then((response) => setYears(response));
    };

    useEffect(() => {
        getYearsData();
    }, []);

    return (
        <Container fluid>
            <Row>
                {
                    years.map((year: YearSchema, index: number) => (
                        <Col key={index}>
                            <a
                                href={`${year.id}`}
                            >
                                <Card>
                                    {year.year}
                                </Card>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}