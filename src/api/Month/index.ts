// Month API Client

import {
    MonthOutSchema,
    MonthSchema,
    YearOutSchema
} from "@/types";

const url='/api/months';
const API = 'http://localhost:8000';

/**
 * Get all months in year
 * @returns array of months in a given year
 */

export async function getMonthsInYear(year_id: YearOutSchema['id']): Promise<Array<MonthSchema>> {
    try {
        const response = await fetch(`${API}${url}/year/${year_id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch years:', error);
        return ([]);
    }
}

export async function getMonthById(month_id: any): Promise<any> {
    try {
        const response = await fetch(`${API}${url}/${month_id}`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch month: ', error);
        return {id: '', month: '', year: {id: '', year: ''}};
    }
}