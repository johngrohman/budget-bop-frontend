// Transaction API Client

import { components } from "@/types/schema";

const url='/api/transactions';
const API = 'http://localhost:8000';

type Params = {
    month_id?: string | null
}

export async function listTransactions(
    filters: Params,
): Promise<Readonly<Array<components['schemas']['TransactionOutSchema']>>> {
    try {
        const response = await fetch(`${API}${url}/list?${filters.month_id && 'month_id='+filters.month_id}`, {
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