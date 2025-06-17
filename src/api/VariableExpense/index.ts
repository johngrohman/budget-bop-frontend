// Variable Expense API Client

import { MonthSchema, VariableExpenseFilterSchema, VariableExpenseInSchema, VariableExpenseOutSchema } from "@/types";
import { DELETE, GET, PATCH, POST } from "../http";

const url='/api/variable-expense';
const API = 'http://localhost:8000';

export async function getVariableExpensesByMonthId(month_id: MonthSchema['id']) {
    return await GET(`${API}${url}/month/${month_id}`);
};

export async function listVariableExpenses(filters: VariableExpenseFilterSchema) {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    return await GET(`${API}${url}?${params}`);
}

export async function patchVariableExpense(
    variable_expense_id: VariableExpenseOutSchema['id'],
    payload: VariableExpenseInSchema
) {
    return await PATCH(`${API}${url}/${variable_expense_id}`, payload);
}

export async function createVariableExpense(
    payload: VariableExpenseInSchema
) {
    return await POST(`${API}${url}/`, payload);
}

export async function deleteVariableExpense(
    payload: Array<VariableExpenseOutSchema['id']>
) {
    return await DELETE(`${API}${url}/`, payload);
}
