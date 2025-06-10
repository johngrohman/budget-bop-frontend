import { MonthSchema, VariableExpenseFilterSchema, VariableExpenseOutSchema } from "@/types";
import VariableExpenseDataGrid from "./table";
import { listVariableExpenses } from "@/api/VariableExpense";

export async function fetchVariableExpenses(month_id: VariableExpenseFilterSchema['month_id']) {
    const variable_expenses = await listVariableExpenses({month_id});
    return variable_expenses;
}

export default async function VariableExpenseTable({month_id}: { month_id: MonthSchema['id']}) {
    const rows = await fetchVariableExpenses(month_id);
    return (
        <>
            <VariableExpenseDataGrid rowData={[...rows]} month_id={month_id} />
        </>
    )
}