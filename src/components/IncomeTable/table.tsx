"use client";

import {
    DataGrid,
    GridColDef,
    GridRowModesModel,
    GridRowsProp,
    GridToolbarContainer
} from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { components } from "@/types/schema";
import AddIcon from '@mui/icons-material/Add';

declare module '@mui/x-data-grid' {
    interface ToolbarPropsOverrides {
        setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
        setRowModesModel: (
            newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
        ) => void;
    }
}

function CustomToolbar({ setRows, setRowModesModel }: {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
  }) {
      const handleClick = () => {
        setRows((oldRows) => [
          ...oldRows,
          { id: oldRows.length + 1, name: '', date: '', expected: '', actual: '' },
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel
        }));
    };
  
    return (
        <GridToolbarContainer>
            <Button onClick={handleClick}>
                <AddIcon />
            </Button>
        </GridToolbarContainer>
    );
}

const columns: GridColDef[] = [
    {
        field: "name",
        headerName: "Name",
        width: 125,
        editable: true,
        sortable: false,
        resizable: false,
    },
    {
        field: "date",
        headerName: "Date",
        width: 100,
        editable: true,
        sortable: false,
        resizable: false,
    },
    {
        field: "expected",
        headerName: "Expected",
        width: 100,
        editable: true,
        sortable: false,
        resizable: false,
        valueFormatter: (c) => `$${c}`,
    },
    {
        field: "actual",
        headerName: "Actual",
        width: 100,
        editable: true,
        sortable: false,
        resizable: false,
        valueFormatter: (c) => `$${c}`,
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
            editMode="cell"
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
