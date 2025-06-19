import React from "react";
import { PieChart } from "@mui/x-charts";

export default function BudgetPieChart() {
    return (
        <PieChart
            series={[
                {
                    data: [
                    // { id: 0, value: 2880, label: 'Income' },
                        { id: 1, value: 10, label: 'Fixed Expense' },
                        { id: 2, value: 1000, label: 'Variable Expense' },
                        { id: 3, value: 1790, label: 'Savings' },
                    ],
                    innerRadius: 60,
                    outerRadius: 110,
                    paddingAngle: 0,
                    cornerRadius: 0,
                    startAngle: 0,
                    endAngle: 365,
                }
            ]}
            height={200}
            colors={['#336699', '#86BBD8', '#2F4858', '#9EE493', '#DAF7DC']}
        />
    );
}