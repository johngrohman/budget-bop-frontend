'use client';

import React from "react";
import { MonthSchema } from "@/types";
import VariableExpenseDataGrid from "./table";

export default function VariableExpenseTable({month_id}: { month_id: MonthSchema['id']}) {
    return <VariableExpenseDataGrid month_id={month_id} />;
}