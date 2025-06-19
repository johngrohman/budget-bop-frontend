'use client';
import React, { createContext, ReactNode, useContext, useState } from "react";

type MonthViewContextType = {
    showFileUploadModal: boolean;
    setShowFileUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
};
  

export const MonthViewContext = createContext<MonthViewContextType | undefined>(undefined);

export const useMonthViewContext = () => {
    const context = useContext(MonthViewContext);
    if (!context) {
        throw new Error("useMonthViewContext must be used within a MonthViewProvider");
    }
    return context;
};

export default function MonthViewContextProvider({children}: {children: ReactNode}) {

    const [showFileUploadModal, setShowFileUploadModal] = useState<boolean>(false);

    const value: MonthViewContextType = {
        showFileUploadModal,
        setShowFileUploadModal,
    };
    
    return (
        <MonthViewContext.Provider
            value={value}
        >
            {children}
        </MonthViewContext.Provider>
    );
}