'use client';
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getYears } from "../../api/Year";
import { YearSchema } from "@/types";

export default function Dashboard() {
    const [years, setYears] = useState<YearSchema[]>([]);

    const getYearsData = () => {
        getYears()
            .then((response) => setYears(response));
    };

    useEffect(() => {
        getYearsData();
    }, []);

    console.log(years);

    return (
        <Container fluid>
            <Row>
                {
                    years.map((year: YearSchema, index: number) => (
                        <Col key={index}>
                            <a
                                href={`${year.year}`}
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