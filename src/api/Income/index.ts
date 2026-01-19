// Income API Client
import { IncomeFilterSchema, IncomeInSchema, IncomeOutSchema } from "@/types";
import { DELETE, GET, PATCH, POST } from "../http";

const url='/api/income';
const API = 'http://localhost:8000';

export async function listIncome(filters: IncomeFilterSchema) {return await GET(`${API}${url}`, filters);}

export async function createIncome(content: IncomeInSchema) {return await POST(`${API}${url}`, content);}

export async function patchIncome(
    income_id: IncomeOutSchema['id'],
    content: IncomeInSchema
) { return await PATCH(`${API}${url}/${income_id}`, content);}

export async function deleteIncome(payload: Array<IncomeOutSchema['id']>) {return await DELETE(`${API}${url}`, payload);}