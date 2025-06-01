"use client";

import {
    DataGrid,
    GridColDef,
    GridRowModesModel,
    GridRowsProp,
    GridToolbarContainer
} from "@mui/x-data-grid";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import { IncomeOutSchema } from "@/types";

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

export default function IncomeTable({ rows }: { rows: IncomeOutSchema[] }) {

    const CustomFooter = () => (
        <div className="border-top bg-light py-2">
        <Container fluid>
            <Row>
            <Col style={{ width: 70 }} /> {/* ID column */}
            <Col style={{ width: 200 }}>
                <strong>Total</strong>
            </Col>
            <Col style={{ width: 200 }}>
                <strong>${100}</strong>
            </Col>
            </Row>
        </Container>
        </div>
    )

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            density="compact"
            slots={{
                toolbar: CustomToolbar,
                footer: CustomFooter,
            }}
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
