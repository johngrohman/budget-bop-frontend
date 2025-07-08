import React from "react";
import { PieChart } from "@mui/x-charts";

export default function BudgetPieChart({
    total_fixed_expenses,
    total_variable_expenses,
    total_savings,
    left_to_budget
}: {
    total_fixed_expenses: string | 0,
    total_variable_expenses: string | 0,
    total_savings: string | 0,
    left_to_budget: string | 0,
}) {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 3, value: Number(total_savings), label: 'Savings' },
                        { id: 1, value: Number(total_fixed_expenses), label: 'Fixed Expenses' },
                        { id: 2, value: Number(total_variable_expenses), label: 'Variable Expenses' },
                        { id: 4, value: Number(left_to_budget), label: 'Left to Budget' },
                    ],
                    innerRadius: 60,
                    outerRadius: 110,
                    paddingAngle: 0,
                    cornerRadius: 0,
                    startAngle: 0,
                    endAngle: 365,
                    cx: 150,
                }
            ]}
            height={200}
            colors={['#468faf', '#2a6f97', '#01497c', '#012a4a']}
        />
    );
}
