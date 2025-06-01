// Variable Expense API Client

import { VariableExpenseFilterSchema, VariableExpenseInSchema, VariableExpenseOutSchema } from "@/types";

const url='/api/variable-expense';
const API = 'http://localhost:8000';

export async function getVariableExpensesById(month_id: VariableExpenseOutSchema) {
    try {
        const response = await fetch(
            `${API}${url}/month/${month_id}`,
            {
                method: 'GET'
            }
        );
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Failed to fetch variable expenses: ', error)
        return ({})
    }
};

export async function listVariableExpenses(filters: VariableExpenseFilterSchema) {
    try {
        const params = new URLSearchParams(filters as Record<string, string>).toString();
        const response = await fetch(
            `${API}${url}?${params}`,
            {
                method: 'GET'
            }
        );
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Failed to fetch variable expenses: ', error)
        return ([])
    }
}

export async function patchVariableExpense(
    variable_expense_id: VariableExpenseOutSchema['id'],
    payload: VariableExpenseInSchema
) {
    try {
        const response = await fetch(`${API}${url}/${variable_expense_id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Failed to fetch variable expenses: ', error)
        return ({})
    }
}

export async function createVariableExpense(
    payload: VariableExpenseInSchema
): Promise<VariableExpenseOutSchema>
{
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Failed to create variable expense');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to create variable expense', error);
        throw error;
    }
}

export async function deleteVariableExpense(
    payload: Array<VariableExpenseOutSchema['id']>
)
{
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'DELETE',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Failed to delete variable expenses');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete variable expenses', error);
        throw error;
    }   
}
