// Fixed Expenses API Client

import { FixedExpenseFilterSchema, FixedExpenseInSchema, FixedExpenseOutSchema } from '@/types';
import { DELETE, GET, PATCH, POST } from '../http';

const url = '/api/fixed-expense';
const API = 'http://localhost:8000';


export async function listFixedExpenses(filters: FixedExpenseFilterSchema) {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    return await GET(`${API}${url}`, params);
}

export async function patchFixedExpense(
    fixed_expense_id: FixedExpenseOutSchema['id'],
    payload: FixedExpenseInSchema,
) {
    return await PATCH(`${API}${url}/${fixed_expense_id}`, payload);
}

export async function createFixedExpense(
    payload: FixedExpenseInSchema
) {
    return await POST(`${API}${url}`, payload);
}

export async function deleteFixedExpense(
    payload: Array<FixedExpenseOutSchema['id']>
) {
    return await DELETE(`${API}${url}`, payload);
}