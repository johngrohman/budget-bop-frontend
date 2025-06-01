import FileUploadModal from "@/components/VariableExpenses/components/TransactionModal";
import { getMonthById } from "@/api/Month";
import FallbackComponentH1 from "@/components/FallbackComponent";
import TransactionTableWrapper from "@/components/VariableExpenses/components/TransactionModal/components";
import React, { Suspense } from "react";
import { Container, Row, Col, Stack, Card, Button } from "react-bootstrap";
import IncomeTableWrapper from "@/components/IncomeTable";
import MonthViewContextProvider from "@/context/monthview";
import '../../styles.scss';
import './month.scss';
import VariableExpenseTable from "@/components/VariableExpenses";

async function MonthComponent({ month_id }: { month_id: string }) {
    const year = await getMonthById(month_id);
    return <h2 className="page_heading">{year.month}</h2>;
}

export default function MonthView({ month_id }: { month_id: string }) {

    return (
        <div className="page_container">
            <MonthViewContextProvider>
                <FileUploadModal month_id={month_id} />
                <Container fluid className="h-100">
                    <Row>
                        <Suspense fallback={<FallbackComponentH1 size={1} />}>
                            <MonthComponent month_id={month_id} />
                        </Suspense>
                    </Row>
                    <Row key={1}>
                        <h5 className="mb-2">Income</h5>
                    </Row>
                    <Row className="border_red">
                        <Col className="left_side_tables_container" xs={4}>
                            <Stack gap={2} key={1}>
                                <Row key={2} className="left_side_table">
                                    <IncomeTableWrapper month_id={month_id} />
                                </Row>
                                <Row key={3}>
                                    <h5 className="m-0">Fixed Expenses</h5>
                                </Row>
                                <Row key={4}>
                                    <Card className="left_side_table">4</Card>
                                </Row>
                                <Row key={6} className="left_side_table">
                                    <VariableExpenseTable month_id={month_id} />
                                </Row>
                            </Stack>
                        </Col>
                        <Col>
                            <Row className="dashboard_income_cards_row">
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
