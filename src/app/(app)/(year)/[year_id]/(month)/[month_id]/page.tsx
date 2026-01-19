import React from "react";
import MonthView from "./month_view";
import MonthViewContextProvider from "@/context/monthview";

export default async function Year({params}: {params: { year_id: string, month_id: string }}) {
    const param = await params;
    const month_id = await param.month_id;
    return (
        <MonthViewContextProvider month_id={month_id}>
            <MonthView month_id={month_id} />
        </MonthViewContextProvider>
    );
}