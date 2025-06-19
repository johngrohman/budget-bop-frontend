'use client';

import { listIncome } from "@/api/Income";
import IncomeDataGrid from "./table";
import { IncomeOutSchema, MonthSchema } from "@/types";
import React, { useEffect, useState } from "react";

export default function IncomeTable({ month_id }: { month_id: MonthSchema['id']}) {

    const [rows, setRows] = useState<Array<IncomeOutSchema>>([]);

    useEffect(() => {
        listIncome({ month_id })
            .then((response) => {
                setRows(response);
            });
    }, []);

    return <IncomeDataGrid rowData={[...rows]} month_id={month_id} />;
}
