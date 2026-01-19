'use client';
import FileUploadModal from "@/components/VariableExpenses/components/TransactionModal";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useMonthViewContext } from "@/context/monthview";
import VariableExpenseTable from "@/components/VariableExpenses";
import FixedExpenseTable from "@/components/FixedExpenses";
import IncomeTable from "@/components/IncomeTable";
import SavingsTable from "@/components/Savings/intdex";
import BudgetPieChart from "@/components/BudgetPieChart";
import CurrencyBox from "@/components/CurrencyBox";
import '../../styles.scss';
import './month.scss';
import { Skeleton } from "@mui/material";
import monthToString from "@/utils/monthToString";

export default function MonthView({ month_id }: { month_id: string }) {
    const { monthData } = useMonthViewContext();

    const total_spent: number = Number(monthData.total_fixed_expenses?.budget.toFixed(2)) +
                        Number(monthData.total_variable_expenses?.budget.toFixed(2)) || 0;

    return (
        <>
            <FileUploadModal month_id={month_id} />
            <h2 className="page_heading">
                {monthToString(monthData.month) || <Skeleton variant="text" width={150} /> }
            </h2>
            <Container fluid>
                <Row>
                    <Col md='5'>
                        <div key={1} className="left_side_table">
                            <IncomeTable month_id={month_id} />
                        </div>
                        <div key={2} className="left_side_table">
                            <FixedExpenseTable month_id={month_id} />
                        </div>
                        <div key={3} className="left_side_table">
                            <VariableExpenseTable month_id={month_id} />
                        </div>
                    </Col>
                    <Col md='7'>
                        <div className="right_side_stack">
                            <h5>&nbsp;</h5>
                            <div className="total_cards_container">
                                <Row>
                                    <Col md='3'>
                                        <CurrencyBox amount={monthData.total_income?.expected && monthData.total_income?.expected.toFixed(2) || 0} heading="TOTAL INCOME"/>
                                    </Col>
                                    <Col md='3'>
                                        <CurrencyBox amount={monthData.total_savings?.budget && monthData.total_savings?.budget.toFixed(2) || 0} heading="TOTAL SAVED"/>
                                    </Col>
                                    <Col md='3'>
                                        <CurrencyBox amount={total_spent.toString()} heading="TOTAL SPENT"/>
                                    </Col>
                                    <Col md='3'>
                                        <CurrencyBox amount={((monthData.total_income?.expected || 0) - ((total_spent || 0) + (monthData.total_savings?.budget || 0))).toFixed(2)} heading="LEFT TO BUDGET"/>
                                    </Col>
                                </Row>
                            </div>
                            <Row>
                                <Col md='9'>
                                    <Card className="pie_chart_card">
                                        <BudgetPieChart
                                            total_fixed_expenses={monthData.total_fixed_expenses?.budget && monthData.total_fixed_expenses?.budget.toFixed(2) || 0}
                                            total_variable_expenses={monthData.total_variable_expenses?.budget && monthData.total_variable_expenses?.budget.toFixed(2) || 0}
                                            total_savings={monthData.total_savings?.budget && monthData.total_savings?.budget.toFixed(2) || 0}
                                            left_to_budget={((monthData.total_income?.expected || 0) - ((total_spent || 0) + (monthData.total_savings?.budget || 0))).toFixed(2)}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <SavingsTable month_id={month_id} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
