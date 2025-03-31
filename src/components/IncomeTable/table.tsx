"use client";

import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { TransactionOutSchema } from "@/types/openapi";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { components } from "@/types/schema";

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <FileUploadIcon />
        </GridToolbarContainer>
    );
}

const columns: GridColDef[] = [
    {
        field: "name",
        headerName: "Name",
        width: 125,
        editable: true 
    },
    {
        field: "date",
        headerName: "Date",
        width: 100,
        editable: true
    },
    {
        field: "expected",
        headerName: "Expected",
        width: 100,
        editable: true
    },
    {
        field: "actual",
        headerName: "Actual",
        width: 100,
        editable: true
    },
];

export default function IncomeTable({ rows }: { rows: components["schemas"]["IncomeOutSchema"][] }) {
    return (
        <DataGrid
            hideFooter
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
