'use client';
import { getMonthById } from "@/api/Month";
import monthToString from "@/utils/monthToString";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { use } from "react";

export default function TransactionMonthView() {
    
    const params = useParams();

    const getMonthQuery = useQuery({
        queryKey: ['month', params.month_id],
        queryFn: () => getMonthById(params.month_id),
    });

    return (
        <div>
            <h2 className="page_heading">
                {
                    !getMonthQuery.isLoading ? 
                        `${monthToString(getMonthQuery.data?.month)} Transactions`
                        :<Skeleton variant="text" width={250} />
                }
            </h2>
        </div>
    );
}