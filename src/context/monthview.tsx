'use client';
import { getMonthById } from "@/api/Month";
import { MonthOutSchema } from "@/types";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MonthViewContextType = {
    showFileUploadModal: boolean;
    setShowFileUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
    monthData: MonthOutSchema;
    setMonthData: React.Dispatch<React.SetStateAction<MonthOutSchema>>;
    getMonthData: Function,
};
  

export const MonthViewContext = createContext<MonthViewContextType | undefined>(undefined);

export const useMonthViewContext = () => {
    const context = useContext(MonthViewContext);
    if (!context) {
        throw new Error("useMonthViewContext must be used within a MonthViewProvider");
    }
    return context;
};

export default function MonthViewContextProvider({month_id, children}: {month_id: string, children: ReactNode}) {

    const [showFileUploadModal, setShowFileUploadModal] = useState<boolean>(false);
    const [monthData, setMonthData] = useState<MonthOutSchema>(
        {
            id: '',
            month: '',
            total_income: {
                expected: 0,
                actual: 0
            },
            total_fixed_expenses: {
                budget: 0,
                actual: 0
            },
            total_variable_expenses: {
                budget: 0,
                actual: 0
            },
            total_savings: {
                budget: 0,
                actual: 0
            },
            year: {
                year: '',
                id: '',
            }
        }
    );

    const getMonthData = () => {
        getMonthById(month_id)
            .then((res) => {
                setMonthData(res as any);
        });
    }

    const value: MonthViewContextType = {
        showFileUploadModal,
        setShowFileUploadModal,
        monthData,
        setMonthData,
        getMonthData,    
    };

    useEffect(() => {
        getMonthData();
    }, [month_id]);
    
    return (
        <MonthViewContext.Provider
            value={value}
        >
            {children}
        </MonthViewContext.Provider>
    );
}