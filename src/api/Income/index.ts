// Income API Client
import { IncomeFilterSchema, IncomeInSchema, IncomeOutSchema } from "@/types";

const url='/api/income';
const API = 'http://localhost:8000';

export async function listIncome(
    filters: IncomeFilterSchema
) {
    try {
        const response = await fetch(`${API}${url}/?${
            filters.month_id && 'month_id='+filters.month_id
        }`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
        return ([]);
    }
}

export async function createIncome(
    content: IncomeInSchema
) {
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'POST',
            body: JSON.stringify(content),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
    }
}

export async function patchIncome(
    income_id: IncomeOutSchema['id'],
    content: IncomeInSchema
) {
    try {
        const response = await fetch(`${API}${url}/${income_id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
        return ({});
    }
}

export async function deleteIncome(
    payload: Array<IncomeOutSchema['id']>
) {
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'DELETE',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete income(s):', error);
    }
}