import FileUploadModal from "@/components/VariableExpenses/components/TransactionModal";
import { getMonthById } from "@/api/Month";
import FallbackComponentH1 from "@/components/FallbackComponent";
import React, { Suspense } from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import MonthViewContextProvider from "@/context/monthview";
import VariableExpenseTable from "@/components/VariableExpenses";
import FixedExpenseTable from "@/components/FixedExpenses";
import IncomeTable from "@/components/IncomeTable";
import SavingsTable from "@/components/Savings/intdex";
import '../../styles.scss';
import './month.scss';
import BudgetPieChart from "@/components/BudgetPieChart";
import CurrencyBox from "@/components/CurrencyBox";

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
                    <Row className="border_green">
                        <Suspense fallback={<FallbackComponentH1 size={1} />}>
                            <MonthComponent month_id={month_id} />
                        </Suspense>
                    </Row>
                    <Row className="border_red">
                        <Col className="left_side_tables_container" xs={4}>
                            <Stack gap={5}>
                                <Row key={2} className="left_side_table">
                                    <IncomeTable month_id={month_id} />
                                </Row>
                                <Row key={3} className="left_side_table">
                                    <FixedExpenseTable month_id={month_id} />
                                </Row>
                                <Row key={6} className="left_side_table">
                                    <VariableExpenseTable month_id={month_id} />
                                </Row>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={5}>
                                <Row className="dashboard_income_cards_row">
                                    <Col>
                                        <CurrencyBox amount={'$9,999.99'} />
                                    </Col>
                                    <Col>
                                        <CurrencyBox amount={'$9,999.99'} />
                                    </Col>
                                    <Col>
                                        <CurrencyBox amount={'$9,999.99'} />
                                    </Col>
                                    <Col>
                                        <CurrencyBox amount={'$9,999.99'} />
                                    </Col>
                                </Row>
                                <Row style={{height: '40vh'}}>
                                    <Card className="w-75">
                                        <BudgetPieChart />
                                    </Card>
                                </Row>
                                <Row className="left_side_table">
                                    <SavingsTable month_id={month_id} />
                                </Row>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </MonthViewContextProvider>
        </div>
    );
}
