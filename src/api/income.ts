// Income API Client
import { components } from "@/types/schema";

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
        console.error('Failed to fetch years:', error)
        return ([])
    }
}