import { getYears } from "@/api/Year";
import YearView from "./year_view";
import { YearOutSchema } from "@/types";

export async function generateStaticParams() {
    const years = await getYears();
    return years.map((year: YearOutSchema) => ({
      year_id: year.id,
    }))
}

export default async function Year({
    params
}:{
    params: Promise<{ year_id: string }>
}) {

    const year_id = (await params).year_id

    return (
        <YearView year_id={year_id} />
    );
}