import { listIncome } from "@/api/Income";
import IncomeDataGrid from "./table";
import { IncomeFilterSchema, IncomeOutSchema, MonthSchema } from "@/types";

export async function fetchIncomeData(month_id: IncomeFilterSchema['month_id']) {
  const income = await listIncome({ month_id });
  return income;
}

export default async function IncomeTable({ month_id }: { month_id: MonthSchema['id']}) {
  const rows = await fetchIncomeData(month_id);

  return <IncomeDataGrid rowData={[...rows]} month_id={month_id} />;
}
