// Fixed Expenses API Client

import { FixedExpenseFilterSchema, FixedExpenseInSchema, FixedExpenseOutSchema } from '@/types';

const url = '/api/fixed-expense';
const API = 'http://localhost:8000';

export async function listFixedExpenses (
    filters: FixedExpenseFilterSchema
): Promise<FixedExpenseOutSchema[]> {
    try {
        const params = new URLSearchParams(filters as Record<string, string>).toString();
        const response = await fetch(`${API}${url}?${params}`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch fixed expenses: ', error)
        return ([])
    }
}

export async function patchFixedExpense(
    fixed_expense_id: FixedExpenseOutSchema['id'],
    payload: FixedExpenseInSchema,
): Promise<FixedExpenseOutSchema | {} > {
    try {
        const response = await fetch(`${API}${url}/${fixed_expense_id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Failed to fetch fixed expenses: ', error)
        return ({})
    }
}

export async function createFixedExpense(
    payload: FixedExpenseInSchema
): Promise<FixedExpenseOutSchema>
{
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Failed to create fixed expense');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to create fixed expense', error);
        throw error;
    }
}

export async function deleteFixedExpense(
    payload: Array<FixedExpenseOutSchema['id']>
) 
{
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'DELETE',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Failed to delete fixed expenses');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete fixed expenses', error);
        throw error;
    }   
}