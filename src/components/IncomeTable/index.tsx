import { listIncome } from "@/api/Income";
import IncomeTable from "./table";
import { components } from "@/types/schema";

async function fetchIncomeData(month_id: components["schemas"]["IncomeFilterSchema"]['month_id']) {
  const income = await listIncome({ month_id });
  return income;
}

export default async function IncomeTableWrapper({ month_id }: { month_id: components["schemas"]["IncomeFilterSchema"]['month_id']}) {
  const rows = await fetchIncomeData(month_id);

  return <IncomeTable rows={[...rows]} />;
}
 