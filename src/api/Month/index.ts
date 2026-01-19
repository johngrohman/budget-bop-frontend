// Month API Client

import {
    MonthOutSchema,
    YearOutSchema
} from "@/types";
import { GET } from "../http";
import { cache } from "react";

const url='/api/months';
const API = 'http://localhost:8000';

/**
 * Get all months in year
 * @returns array of months in a given year
 */

export const getMonthsInYear = cache(async (year_id: YearOutSchema['id']) => {
    return await GET(`${API}${url}/year/${year_id}`);
});

export const getMonthById = cache(async (month_id: number): Promise<MonthOutSchema> => {
    return await GET(`${API}${url}/${month_id}`);
});