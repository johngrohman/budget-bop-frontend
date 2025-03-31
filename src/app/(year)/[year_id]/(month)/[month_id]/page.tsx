import MonthView from "./month_view";

export default async function Year({
    params
}:{
    params: Promise<{ year_id: string, month_id: string }>
}) {
    const month_id = (await params).month_id
    return (
        <MonthView month_id={month_id} />
    );
}