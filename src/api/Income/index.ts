// Income API Client
import { components } from "@/types/schema";
import { UUID } from "crypto";

const url='/api/income';
const API = 'http://localhost:8000';

export async function listIncome(
    filters: components["schemas"]["IncomeFilterSchema"]
) {
    try {
        const response = await fetch(`${API}${url}?${
            filters.month_id && 'month_id='+filters.month_id
        }`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error)
        return ([])
    }
}

export async function addIncome(
    content: components['schemas']['IncomeInSchema']
) {
    try {
        const response = await fetch(`${API}${url}`, {
            method: 'POST',
            body: JSON.stringify(content),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
    }
}

export async function patchIncome(
    content: components['schemas']['IncomeInSchema']
) {
    try {
        const response = await fetch(`${API}${url}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
    }
}

export async function deleteIncome(
    income_id: UUID
) {
    try {
        const response = await fetch(`${API}${url}?${income_id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch income:', error);
    }
}