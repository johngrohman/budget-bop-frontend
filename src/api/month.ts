// Month API Client

import { MonthSchema, YearSchema } from "@/types/openapi";

const url='/api/months';
const API = 'http://localhost:8000';

/**
 * Get all months in year
 * @returns array of months in a given year
 */

export async function getMonthsInYear(year_id: YearSchema['id']): Promise<Array<MonthSchema>> {
    try {
        const response = await fetch(`${API}${url}/year/${year_id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch years:', error)
        return ([])
    }
}