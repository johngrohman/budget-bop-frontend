// Month API Client

import {
    MonthOutSchema,
    MonthSchema,
    YearOutSchema
} from "@/types";
import { GET } from "../http";

const url='/api/months';
const API = 'http://localhost:8000';

/**
 * Get all months in year
 * @returns array of months in a given year
 */

export async function getMonthsInYear(year_id: YearOutSchema['id']): Promise<Array<MonthSchema>> {
        return await GET(`${API}${url}/year/${year_id}`);
}

export async function getMonthById(month_id: any): Promise<MonthOutSchema> {
        return await GET(`${API}${url}/${month_id}`);
}