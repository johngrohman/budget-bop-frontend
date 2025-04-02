import { getYears } from "@/api/Year";
import YearView from "./year_view";
import { components } from "@/types/schema";

type YearSchema = components['schemas']['YearSchema']

export async function generateStaticParams() {
    const years = await getYears();
    return years.map((year: YearSchema) => ({
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