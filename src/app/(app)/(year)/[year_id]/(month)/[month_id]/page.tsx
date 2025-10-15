import React from "react";
import MonthView from "./month_view";
import MonthViewContextProvider from "@/context/monthview";

export default function Year({params}: {params: { year_id: string, month_id: string }}) {
    const month_id = params.month_id;
    return (
        <MonthViewContextProvider month_id={month_id}>
            <MonthView month_id={month_id} />
        </MonthViewContextProvider>
    );
}