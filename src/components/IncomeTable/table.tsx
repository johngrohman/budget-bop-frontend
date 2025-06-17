"use client";

import {
    DataGrid,
    GridColDef,
    GridRowModesModel,
    GridRowsProp,
    GridRowSelectionModel
} from "@mui/x-data-grid";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { IncomeOutSchema, MonthSchema } from "@/types";
import { useMemo, useState } from "react";
import { createIncome, deleteIncome, listIncome, patchIncome } from "@/api/Income";

declare module '@mui/x-data-grid' {
    interface ToolbarPropsOverrides {
        setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
        setRowModesModel: (
            newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
        ) => void;
    }
}

const columns: GridColDef[] = [
    {
        field: "name",
        headerName: "Name",
        width: 170,
        editable: true,
        sortable: false,
        resizable: false,
    },
    {
        field: "date",
        headerName: "Date",
        width: 94,
        editable: true,
        sortable: false,
        resizable: false,
    },
    {
        field: "expected",
        headerName: "Expected",
        width: 94,
        editable: true,
        sortable: false,
        resizable: false,
        valueFormatter: (c) => `$${c}`,
    },
    {
        field: "actual",
        headerName: "Actual",
        width: 94,
        editable: true,
        sortable: false,
        resizable: false,
        valueFormatter: (c) => `$${c}`, 
    },
];

function CustomFooter({ rows }: { rows: IncomeOutSchema[] }) {

    const totalExpected = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.expected ?? 0), 0);
    }, [rows]);

    const totalActual = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.actual ?? 0), 0);
    }, [rows]);

    const totalDiff = useMemo(() => totalExpected - totalActual, [totalExpected, totalActual]);

    return (
        <div className="bg-light d-flex justify-content-center align-items-center border-top test">
            <span style={{ width: 50 }}>Total</span>
            <span style={{ width: 170 }} />
            <span style={{ width: 94 }} />
            <span style={{ width: 94 }}>${totalExpected.toFixed(2)}</span>
            <span style={{ width: 94 }}>${totalActual.toFixed(2)}</span>
        </div>
    );
}

export default function IncomeDataGrid({ rowData, month_id }: { rowData: IncomeOutSchema[], month_id: MonthSchema['id'] }) {

    const [rows, setRows] = useState<Array<IncomeOutSchema>>(rowData);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);

    const handleRowCreate = async () => {
        await createIncome({month_id: month_id});
        setRows(await listIncome({month_id}));
    }

    const handleRowDelete = async () => {
        await deleteIncome(selectedRows as Array<IncomeOutSchema['id']>);
        setRows(await listIncome({month_id}));
    }

    const handleRowUpdate = async (
        newRow: any,
        oldRow: any,
    ) => {
        
        const bodyPayload: Partial<IncomeOutSchema> = {};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof IncomeOutSchema;
            if(newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchIncome(newRow.id, bodyPayload);
            return updatedRow;
        } catch (error) {
            console.error('Row update failed', error);
            throw error;
        }
    };

    const handleCellEditStop = async () => {
        setRows(await listIncome({month_id}));
    };

    const handleRowUpdateError = (e: any) => {
        console.log(e);
    };

    return (
        <Stack gap={2} className="h-100">
            <Row className="w-100 m-0">
                <Col className='p-0'>
                    <h5 className="m-0">Income</h5>
                </Col>
                <Col align='right' className="p-0">
                    <Button
                        variant='link'
                        className={`py-0 ${canDelete?'':'invisible'}`}
                        onClick={handleRowDelete}
                    >
                        Delete
                    </Button>
                    <Button
                        variant='link'
                        className='p-0'
                        onClick={handleRowCreate}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
            <Row className="m-0 h-100">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    density="compact"
                    className="p-0"
                    editMode="cell"
                    disableColumnMenu
                    disableColumnResize
                    processRowUpdate={handleRowUpdate}
                    onCellEditStop={handleCellEditStop}
                    onProcessRowUpdateError={handleRowUpdateError}
                    checkboxSelection
                    onRowSelectionModelChange={(e) => {
                        setSelectedRows(e);
                        setCanDelete(e.length);
                    }}
                    slots={{footer: () => <CustomFooter rows={rows} />}}
                />
            </Row>
        </Stack>
    );
}
