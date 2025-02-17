'use client'
import { Button, Card, Container } from "react-bootstrap";
import { PieChart } from "@mui/x-charts";
import BannerCard from "@/components/BannerCard";
import styles from './month.module.scss';
import { useState } from "react";

// Fixed Expenses
// Variable Savings
// Left to Budget
// Savings

export default function Dashboard() {
    const [number, setNumber] = useState(0);
    const [another, setAnother] = useState(50);

    return (
        <>
            <div className={styles.page_container}>
                <div className={styles.page_heading_container}>
                    <h1 className={styles.page_heading}>January</h1>
                </div>
                <div className={styles.dashboard_tables_charts_container}>
                    <div className={styles.dashboard_tables}>
                        <div className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center h-100 w-100">
                                Income Table
                            </Card>
                        </div>
                        <div className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center h-100">
                                Fixed Expenses Table
                            </Card>
                        </div>
                        <div className={styles.dashboard_income_column_card}>
                            <Card className="d-flex justify-center align-items-center h-100">
                                Variable Expenses Table
                            </Card>
                        </div>
                    </div>
                    <div className={styles.dashboard_card_chart_column}>
                        <div className={styles.dashboard_income_cards_row}>
                            <div className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL INCOME'
                                    text='$0000.00'
                                />
                            </div>
                            <div className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL SAVED'
                                    text='$0000.00'
                                />
                            </div>
                            <div className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='TOTAL SPENT'
                                    text='$0000.00'
                                />
                            </div>
                            <div className="p-0 d-flex justify-center align-items-center">
                                <BannerCard
                                    color='#B1D4E0'
                                    title='LEFT TO BUDGET'
                                    text='$0000.00'
                                />
                            </div>
                        </div>
                        <div className={styles.dashboard_row}>
                            <PieChart
                                title="Budget Target"
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 25, label: 'Fixed Expenses', color: '#145DA0' },
                                            { id: 1, value: 20, label: 'Variable Expenses', color: '#0C2D48' },
                                            { id: 2, value: 35, label: 'Savings', color: '#2E8BC0' },
                                            { id: 3, value: number, label: 'Left to Budget', color: '#B1D4E0' },
                                        ],
                                        innerRadius: 50,
                                        outerRadius: 105,
                                        paddingAngle: 0,
                                        cornerRadius: 0,
                                        startAngle: 0,
                                        endAngle: 360,
                                        cx: 150,
                                        // cy: 150,
                                    }
                                ]}
                                width={500}
                                className={styles.chart}
                            />
                        </div>
                        <div className={styles.savings_container}>
                            <Card className="d-flex justify-center align-items-center h-100 w-100">
                                Savings Table
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
