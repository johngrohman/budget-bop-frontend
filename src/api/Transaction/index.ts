// Transaction API Client

import { components } from "@/types/schema";
type MonthOutSchema = components['schemas']['MonthOutSchema']

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

export async function uploadTransactions(
  file: File,
  month_id: MonthOutSchema['id']
): Promise<Readonly<components['schemas']['TransactionOutSchema']>> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('month_id', month_id);

    const response = await fetch(`${API}${url}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to upload transactions:', error);
    throw error;
  }
}