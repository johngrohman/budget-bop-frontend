import React from "react";
import { getYears } from "@/api/Year";
import YearView from "./year_view";
import { Components, YearOutSchema } from "@/types";

export default async function Year({
    params
}:{
    params: Promise<{ year_id: string }>
}) {

    const year_id = (await params).year_id;

    return (
        <YearView year_id={year_id} />
    );
}