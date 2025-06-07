import { listSavings } from "@/api/Savings";
import { SavingsOutSchema } from "@/types";
import SavingsDataGrid from "./table";


export default async function SavingsTable({month_id}: { month_id: SavingsOutSchema['month']['id']}) {
    const rows = await listSavings({month_id});
    return (
        <>
            <SavingsDataGrid rowData={[...rows]} month_id={month_id} />
        </>
    )
}
