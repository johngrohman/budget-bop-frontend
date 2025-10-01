// Transaction API Client

import { MonthOutSchema, TransactionFilterSchema, TransactionOutSchema } from "@/types";
import { DELETE, GET, POST } from "../http";

const url='/api/transactions';
const API = 'http://localhost:8000';

export async function listTransactions(
    filters: TransactionFilterSchema,
) {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    return await GET(`${API}${url}`, params)
}

export async function uploadTransactions(
    file: File,
    month_id: MonthOutSchema['id']
) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('month_id', month_id);
    console.log(file);
    console.log(formData);
    return await POST(`${API}${url}/upload`, {formData});
}

export async function deleteTransactions(
    payload: Array<TransactionOutSchema['id']>
) {
    return await DELETE(`${API}${url}/`, payload)
}