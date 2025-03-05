'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, NavItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { getYears } from "../../api/year";

interface Navigation {
    show: boolean,
    setShow: Function
}

interface Year {
    id: string,
    year: string
}

export default function Navigation({show, setShow}: Navigation) {

    const [years, setYears] = useState<Year[]>([]);

    const getYearsData = () => {
        getYears()
        .then((response) => setYears(response))
    }

    useEffect(() => {
        getYearsData()
    }, [])

    return (
        <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            backdrop={false}
        >
            <br />
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>
                    Budget Bop
                </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
            <Nav>
                <Container>
                    <Row >
                        <NavItem>
                            <Link
                                href={'/'}
                                onClick={() => setShow(false)}
                            >
                                Dashboard
                            </Link>
                        </NavItem>
                    </Row>
                    {
                        years.map((year: Year, index: number) => (
                            <Row key={index}>
                                <NavItem>
                                    <Link
                                        href={`${year.id}`}
                                        onClick={() => setShow(false)}
                                    >
                                        {year.year}
                                    </Link>
                                </NavItem>
                            </Row>
                        ))
                    }
                </Container>
            </Nav>
            </OffcanvasBody>
        </Offcanvas>
    );
}