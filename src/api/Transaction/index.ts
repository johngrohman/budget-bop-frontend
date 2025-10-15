// Transaction API Client

import { MonthOutSchema, TransactionFilterSchema, TransactionOutSchema } from "@/types";
import { DELETE, GET, POST, POSTFile } from "../http";

const url='/api/transactions';
const API = 'http://localhost:8000';

export async function listTransactions(
    filters: any,
) {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    return await GET(`${API}${url}`, params)
}

export async function uploadTransactions(
    file: File,
    month_id: MonthOutSchema['id']
) {
    const data = new FormData();
    data.append('file', file);
    data.append('month_id', month_id);
    return await POSTFile(`${API}${url}/upload`, data);
}

export async function deleteTransactions(
    payload: Array<TransactionOutSchema['id']>
) {
    return await DELETE(`${API}${url}/`, payload)
}