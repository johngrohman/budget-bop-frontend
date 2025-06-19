'use client';

import React from "react";
import { MonthSchema } from "@/types";
import FixedExpenseDataGrid from "./table";

export default function FixedExpenseTable({month_id}: { month_id: MonthSchema['id']}) {
    return <FixedExpenseDataGrid month_id={month_id} />;
}