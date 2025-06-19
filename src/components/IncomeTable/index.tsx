'use client';

import React from "react";
import { MonthSchema } from "@/types";
import IncomeDataGrid from "./table";

export default function IncomeTable({ month_id }: { month_id: MonthSchema['id']}) {
    return <IncomeDataGrid month_id={month_id} />;
}
