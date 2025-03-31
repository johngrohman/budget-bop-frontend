import TransactionTable from "./table";
import { listTransactions } from "@/api/transaction";
import { TransactionFilterSchema } from "@/types/openapi";

async function fetchTransactionData(month_id: TransactionFilterSchema['month_id']) {
  const transactions = await listTransactions({ month_id });
  return transactions;
}

export default async function TransactionTableWrapper({ month_id }: { month_id: TransactionFilterSchema['month_id'] }) {
  const rows = await fetchTransactionData(month_id);

  return <TransactionTable rows={[...rows]} />;
}
