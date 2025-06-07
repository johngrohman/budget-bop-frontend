'use client'
import { listTransactions } from "@/api/Transaction";
import { TransactionFilterSchema, TransactionOutSchema } from "@/types";
import TransactionDataGrid from "./table";
import { useEffect, useState } from "react";

export function fetchTransactionData(month_id: TransactionFilterSchema['month_id']) {
  const transactions = listTransactions({ month_id });
  return transactions;
}

export default function TransactionTable({ month_id }: { month_id: TransactionOutSchema['month']['id'] }) {
  
    const [rowData, setRowData] = useState<TransactionOutSchema[]>([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
            const rows = await fetchTransactionData(month_id);
            setRowData(rows);
        };

        fetchData();
    }, [month_id]);

    return <TransactionDataGrid rowData={rowData} month_id={month_id} />;
}
