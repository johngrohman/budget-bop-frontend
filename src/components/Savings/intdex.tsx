import React from "react";
import { listSavings } from "@/api/Savings";
import { MonthSchema } from "@/types";
import SavingsDataGrid from "./table";


export default async function SavingsTable({month_id}: { month_id: MonthSchema['id']}) {
    const rows = await listSavings({month_id});
    return (
        <>
            <SavingsDataGrid rowData={[...rows]} month_id={month_id} />
        </>
    );
}
