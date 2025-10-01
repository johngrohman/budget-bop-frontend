// Savings API Client

import { SavingsFilterSchema, SavingsInSchema, SavingsOutSchema } from "@/types";
import { DELETE, GET, PATCH, POST } from "../http";

const url='/api/savings';
const API = 'http://localhost:8000';

export async function listSavings(filters: SavingsFilterSchema) {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    return await GET(`${API}${url}`, params);
}

export async function patchSavings(
    savings_id: SavingsOutSchema['id'],
    payload: SavingsInSchema,
) {
    return await PATCH(`${API}${url}/${savings_id}`, payload);
}

export async function createSavings(payload: SavingsInSchema) {
    return await POST(`${API}${url}`, payload);
}

export async function deleteSavings(payload: Array<SavingsOutSchema['id']>) {
    return await DELETE(`${API}${url}`, payload);
}