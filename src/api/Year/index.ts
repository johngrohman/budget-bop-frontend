// Year API Client

import { YearInSchema, YearSchema } from "@/types";
import { DELETE, GET, PATCH, POST } from "../http";

const url = "/api/years";
const API = 'http://localhost:8000';

interface Year {
  id: string;
  year: string;
}

/**
 * Get All Years
 * @returns array of years
 */
export async function getYears() {return await GET(`${API}${url}`);}

export async function createYear(payload: YearInSchema) {
    return await POST(`${API}${url}`, payload);
}

export async function getYearById(year_id: Year['id'], ) {return await GET(`${API}${url}/${year_id}`, );}

/**
 * Patch Year By Id
 * @param year 
 * @returns 
 */
export async function patchYear(year_id: YearSchema['id'], payload: YearInSchema) {
    return await PATCH(`${API}${url}/${year_id}`, payload);
}

/**
 * Delete Year By Id
 * @param year_id 
 * @returns 
 */
export async function deleteYear(year_id: YearSchema['id']) {
    return await DELETE(`${API}${url}/${year_id}`);
}

/**
 * Post Complete Year
 * @returns year object that was created
 */
export async function createCompleteYear(year: YearInSchema) {
    return await POST(`${API}${url}/complete`, year);
}