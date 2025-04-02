"use client";

import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { components } from '@/types/schema';

type TransactionOutSchema = components['schemas']['TransactionOutSchema']

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <FileUploadIcon />
        </GridToolbarContainer>
    );
}

const columns: GridColDef[] = [
    {
        field: "date",
        headerName: "Date",
        width: 125,
        editable: true 
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 125,
        editable: true,
        valueFormatter: (c) => `$${c}`,
    },
    {
        field: "category",
        headerName: "Category",
        width: 175,
        editable: true
    },
];

export default function TransactionTable({ rows }: { rows: TransactionOutSchema[] }) {
    return (
        <DataGrid
            hideFooter
            checkboxSelection
            rows={rows}
            columns={columns}
            density="compact"
            slots={{ toolbar: CustomToolbar }}
            slotProps={{
            filterPanel: {
                filterFormProps: {
                    logicOperatorInputProps: { variant: "outlined", size: "small" },
                    columnInputProps: { variant: "outlined", size: "small", sx: { mt: "auto" } },
                    operatorInputProps: { variant: "outlined", size: "small", sx: { mt: "auto" } },
                    valueInputProps: { InputComponentProps: { variant: "outlined", size: "small" } },
                    },
                },
            }}
        />
    );
}
