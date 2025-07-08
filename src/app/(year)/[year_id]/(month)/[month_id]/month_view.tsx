'use client';
import FileUploadModal from "@/components/VariableExpenses/components/TransactionModal";
import FallbackComponentH1 from "@/components/FallbackComponent";
import React, { Suspense } from "react";
import { Container, Card } from "react-bootstrap";
import { useMonthViewContext } from "@/context/monthview";
import VariableExpenseTable from "@/components/VariableExpenses";
import FixedExpenseTable from "@/components/FixedExpenses";
import IncomeTable from "@/components/IncomeTable";
import SavingsTable from "@/components/Savings/intdex";
import BudgetPieChart from "@/components/BudgetPieChart";
import CurrencyBox from "@/components/CurrencyBox";
import '../../styles.scss';
import './month.scss';

export default function MonthView({ month_id }: { month_id: string }) {
    const { monthData } = useMonthViewContext();

    const total_spent: number = Number(monthData.total_fixed_expenses?.budget.toFixed(2)) +
                        Number(monthData.total_variable_expenses?.budget.toFixed(2)) || 0;
    console.log(total_spent);
    return (
        <div className="page_container">
            <FileUploadModal month_id={month_id} />
            <Container fluid className="h-100">
                <Suspense fallback={<h2 className="page_heading">Loading</h2>}>
                    <h2
                        className="page_heading"
                        onDoubleClick={() => console.log("hi")}
                    >
                        {monthData.month && monthData.month}
                    </h2>
                </Suspense>
                <div className="dashboard_container">
                    <div className="left_side_tables_container">
                        <div key={1} className="left_side_table">
                            <IncomeTable month_id={month_id} />
                        </div>
                        <div key={2} className="left_side_table">
                            <FixedExpenseTable month_id={month_id} />
                        </div>
                        <div key={3} className="left_side_table">
                            <VariableExpenseTable month_id={month_id} />
                        </div>
                    </div>
                    <div className="right_side_table_container">
                        <div className="right_side_stack">
                            <h5>&nbsp;</h5>
                            <div className="d-flex justify-content-between">
                                <CurrencyBox amount={monthData.total_income?.expected && monthData.total_income?.expected.toFixed(2) || 0} heading="TOTAL INCOME"/>
                                <CurrencyBox amount={monthData.total_savings?.budget && monthData.total_savings?.budget.toFixed(2) || 0} heading="TOTAL SAVED"/>
                                <CurrencyBox
                                    amount={total_spent.toString()} heading="TOTAL SPENT"/>
                                <CurrencyBox amount={((monthData.total_income?.expected || 0) - ((total_spent || 0) + (monthData.total_savings?.budget || 0))).toFixed(2)} heading="LEFT TO BUDGET"/>
                            </div>
                            <div>
                                <div style={{height: '5vh'}} />
                                <Card className="pie_chart_card">
                                    <BudgetPieChart
                                        total_fixed_expenses={monthData.total_fixed_expenses?.budget && monthData.total_fixed_expenses?.budget.toFixed(2) || 0}
                                        total_variable_expenses={monthData.total_variable_expenses?.budget && monthData.total_variable_expenses?.budget.toFixed(2) || 0}
                                        total_savings={monthData.total_savings?.budget && monthData.total_savings?.budget.toFixed(2) || 0}
                                        left_to_budget={((monthData.total_income?.expected || 0) - ((total_spent || 0) + (monthData.total_savings?.budget || 0))).toFixed(2)}
                                    />
                                </Card>
                            </div>
                            <div className="left_side_table">
                                <SavingsTable month_id={month_id} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
