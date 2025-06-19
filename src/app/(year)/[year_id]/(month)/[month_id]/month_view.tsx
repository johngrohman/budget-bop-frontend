import FileUploadModal from "@/components/VariableExpenses/components/TransactionModal";
import { getMonthById } from "@/api/Month";
import FallbackComponentH1 from "@/components/FallbackComponent";
import React, { Suspense } from "react";
import { Container, Row, Card } from "react-bootstrap";
import MonthViewContextProvider from "@/context/monthview";
import VariableExpenseTable from "@/components/VariableExpenses";
import FixedExpenseTable from "@/components/FixedExpenses";
import IncomeTable from "@/components/IncomeTable";
import SavingsTable from "@/components/Savings/intdex";
import BudgetPieChart from "@/components/BudgetPieChart";
import CurrencyBox from "@/components/CurrencyBox";
import '../../styles.scss';
import './month.scss';

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
                    <Row className="page_heading_container">
                        <Suspense fallback={<FallbackComponentH1 size={1} />}>
                            <MonthComponent month_id={month_id} />
                        </Suspense>
                    </Row>
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
                            <h5>&nbsp;</h5>
                            <div className="right_side_stack">
                                <div className="d-flex justify-content-between">
                                    <CurrencyBox amount={'$9,999.99'} />
                                    <CurrencyBox amount={'$9,999.99'} />
                                    <CurrencyBox amount={'$9,999.99'} />
                                    <CurrencyBox amount={'$9,999.99'} />
                                </div>
                                <div>
                                    <div style={{height: '5vh'}} />
                                    <Card className="pie_chart_card">
                                        <BudgetPieChart />
                                    </Card>
                                </div>
                                <div className="savings_table">
                                    <SavingsTable month_id={month_id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </MonthViewContextProvider>
        </div>
    );
}
