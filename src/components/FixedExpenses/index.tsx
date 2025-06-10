import { listFixedExpenses } from "@/api/FixedExpenses";
import { FixedExpenseFilterSchema, FixedExpenseOutSchema, MonthSchema } from "@/types";
import FixedExpenseDataGrid from "./table";

export async function fetchFixedExpense(month_id: FixedExpenseFilterSchema['month_id']) {
    const fixed_expenses = await listFixedExpenses({month_id});
    return fixed_expenses;
}

export default async function FixedExpenseTable({month_id}: { month_id: MonthSchema['id']}) {
    const rows = await fetchFixedExpense(month_id);
    return <FixedExpenseDataGrid rowData={[...rows]} month_id={month_id} />;
}