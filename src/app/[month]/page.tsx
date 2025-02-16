'use client'
import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PieChart } from "@mui/x-charts";
import BannerCard from "@/components/BannerCard";
import styles from './styles.module.scss';
import { useState } from "react";

// Fixed Expenses
// Variable Savings
// Left to Budget
// Savings

export default function Dashboard(name: {name: string}) {
    const [number, setNumber] = useState(0);
    const [another, setAnother] = useState(50);

    return (
        <>
            <Container fluid className={`${styles.page_container} p-0`}>
                <div className={styles.page_heading_container}>
                    <h1 className={styles.page_heading}>January</h1>
                </div>
                <Row style={{width: '100%', height: '90%'}}>
                    <Col className={styles.dashboard_income_column} xs={4}>
                        <Row className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center">
                                Income Table
                            </Card>
                        </Row>
                        <Row className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center">
                                Fixed Expenses Table
                            </Card>
                        </Row>
                        <Row className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center">
                                Variable Expenses Table
                            </Card>
                        </Row>
                    </Col>
                    <Col className={styles.dashboard_card_chart_column}>
                        <Row className={styles.dashboard_income_cards_row}>
                            <Col className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL INCOME'
                                    text='$0000.00'
                                />
                            </Col>
                            <Col className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL SAVED'
                                    text='$0000.00'
                                />
                            </Col>
                            <Col className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL SPENT'
                                    text='$0000.00'
                                />
                            </Col>
                            <Col className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='LEFT TO BUDGET'
                                    text='$0000.00'
                                />
                            </Col>
                        </Row>
                        <Row className={styles.dashboard_row}>
                            <Col>
                                <div className="h-100 align-center">
                                    <PieChart
                                        title="Budget Target"
                                        series={[
                                            {
                                                data: [
                                                    { id: 0, value: 25, label: 'Fixed Expenses', color: '#145DA0' },
                                                    { id: 1, value: 20, label: 'Variable Expenses', color: '#0C2D48' },
                                                    { id: 2, value: 35, label: 'Savings', color: '#2E8BC0' },
                                                    { id: 3, value: 20, label: 'Left to Budget', color: '#B1D4E0' },
                                                ],
                                                innerRadius: 60,
                                                outerRadius: 115,
                                                paddingAngle: 0,
                                                cornerRadius: 0,
                                                startAngle: 0,
                                                endAngle: 360,
                                                cx: 150,
                                                cy: 150,
                                            }
                                        ]}
                                    />
                                </div>
                            </Col>
                            <Col />
                        </Row>
                        <Row className={styles.dashboard_income_cards_row}>
                            <Col className="h-100">
                                <Card className="d-flex justify-center align-items-center h-100">
                                    <Button
                                        onClick={() => {setNumber(number+10);setAnother(another-5)}}
                                    >Button</Button>
                                </Card>
                            </Col>
                            <Col />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
