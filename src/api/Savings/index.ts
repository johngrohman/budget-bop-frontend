// Savings API Client

import { SavingsFilterSchema, SavingsInSchema, SavingsOutSchema } from "@/types";

const url='/api/savings';
const API = 'http://localhost:8000';

export async function listSavings(filters: SavingsFilterSchema) {
    try {
        const params = new URLSearchParams(filters as Record<string, string>).toString();
        const response = await fetch(
            `${API}${url}/?${params}`,
            {
                method: 'GET'
            }
        );
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch savings: ', error);
        return ([]);
    }
}

export async function patchSavings(
    savings_id: SavingsOutSchema['id'],
    payload: SavingsInSchema,
) {
    try {
        const response = await fetch(`${API}${url}/${savings_id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch savings: ', error);
        return ({});
    }
}

export async function createSavings(
    payload: SavingsInSchema
): Promise<SavingsOutSchema>
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

export async function deleteSavings(
    payload: Array<SavingsOutSchema['id']>
)
{
    try {
        const response = await fetch(`${API}${url}/`, {
            method: 'DELETE',
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Failed to delete savings');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete savings', error);
        throw error;
    }   
}
