import { YearSchema } from "@/types/openapi";
import { getYears } from "@/api/year";
import YearView from "./year_view";

export async function generateStaticParams() {
    const years = await getYears().then((res) => res)
    return years.map((year: YearSchema) => ({
      year_id: year.id,
    }))
}

export default async function Year({
    params
}:{
    params: Promise<{ year_id: string }>
}) {
    const { year_id } = await params
    
    return (
        <YearView year_id={year_id} />
    );
}