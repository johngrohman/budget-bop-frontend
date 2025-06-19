'use client';

import React from "react";
import { MonthSchema } from "@/types";
import SavingsDataGrid from "./table";

export default function SavingsTable({month_id}: { month_id: MonthSchema['id']}) {
    return <SavingsDataGrid month_id={month_id} />;
}
