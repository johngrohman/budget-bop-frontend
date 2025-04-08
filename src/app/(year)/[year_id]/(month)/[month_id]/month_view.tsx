import FileUploadModal from "@/components/TransactionTable/components/FileUpload";
import { getMonthById } from "@/api/Month";
import FallbackComponentH1 from "@/components/FallbackComponent";
import TransactionTableWrapper from "@/components/TransactionTable";
import React, { Suspense } from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import IncomeTableWrapper from "@/components/IncomeTable";
import './month.scss';
import MonthViewContextProvider from "@/context/monthview";

async function MonthComponent({ month_id }: { month_id: string }) {
    const year = await getMonthById(month_id);
    return <h2 className="page_heading">{year.month}</h2>;
}

export default function MonthView({ month_id }: { month_id: string }) {

    return (
        <div className="page_container">
            <MonthViewContextProvider>
                <FileUploadModal />
                <Container fluid className="h-100">
                    <Row>
                        <Suspense fallback={<FallbackComponentH1 size={1} />}>
                            <MonthComponent month_id={month_id} />
                        </Suspense>
                    </Row>
                    <Row className="border_red">
                        <Col className="border_green" xs={4}>
                            <Stack gap={2} key={1}>
                                <Row key={1}>
                                    <h5 className="m-0">Income</h5>
                                    <IncomeTableWrapper
                                        month_id={month_id}
                                    />
                                </Row>
                                <Row key={3}>
                                    <h5 className="m-0">Fixed Expenses</h5>
                                </Row>
                                <Row key={4}>
                                    <Card className="transaction_table">4</Card>
                                </Row>
                                <Row key={5}>
                                    <h5 className="m-0">Variable Expenses</h5>
                                </Row>
                                <Row key={6}>
                                    <TransactionTableWrapper
                                        month_id={month_id}
                                    />
                                </Row>
                            </Stack>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Card>1</Card>
                                </Col>
                                <Col>
                                    <Card>2</Card>
                                </Col>
                                <Col>
                                    <Card>3</Card>
                                </Col>
                                <Col>
                                    <Card>4</Card>
                                </Col>
                            </Row>
                            <Row className="border_purple">
                                <Row>
                                    <Card>1</Card>
                                </Row>
                            </Row>
                            <Row className="border_purple">
                                <Card>1</Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </MonthViewContextProvider>
        </div>
    );
}
