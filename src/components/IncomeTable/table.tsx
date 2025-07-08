"use client";

import {
    DataGrid,
    GridColDef,
    GridRowModesModel,
    GridRowsProp,
    GridRowSelectionModel
} from "@mui/x-data-grid";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { IncomeInSchema, IncomeOutSchema, MonthSchema } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import { createIncome, deleteIncome, listIncome, patchIncome } from "@/api/Income";
import { useMonthViewContext } from "@/context/monthview";

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
        valueFormatter: (c) => c!==null?`$${c}`:null,
    },
    {
        field: "actual",
        headerName: "Actual",
        width: 94,
        editable: true,
        sortable: false,
        resizable: false,
        valueFormatter: (c) => c!==null?`$${c}`:null, 
    },
];

function CustomFooter({ rows }: { rows: IncomeOutSchema[] }) {

    const totalExpected = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.expected ?? 0), 0);
    }, [rows]);

    const totalActual = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.actual ?? 0), 0);
    }, [rows]);

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

export default function IncomeDataGrid({ month_id }: { month_id: MonthSchema['id'] }) {

    const [rows, setRows] = useState<Array<IncomeOutSchema>>([]);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);
    const { getMonthData } = useMonthViewContext();

    useEffect(() => {
        listIncome({ month_id })
            .then((response) => {
                setRows(response);
            });
    }, []);

    const handleRowCreate = async () => {
        await createIncome({month_id: month_id});
        setRows(await listIncome({month_id}));
        getMonthData();
    };

    const handleRowDelete = async () => {
        await deleteIncome(selectedRows as Array<IncomeOutSchema['id']>);
        setRows(await listIncome({month_id}));
        getMonthData();
    };

    const handleRowUpdate = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newRow: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        oldRow: any,
    ) => {
        
        const bodyPayload: Partial<IncomeInSchema> = {month_id: month_id};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof IncomeInSchema;
            if(newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchIncome(newRow.id, bodyPayload);
            setRows(await listIncome({month_id}));
            return updatedRow;
        } catch (error) {
            console.error('Row update failed', error);
            throw error;
        }
    };

    const handleCellEditStop = async () => {
        getMonthData();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRowUpdateError = (e: any) => {
        console.log(e);
    };

    return (
        <div className="d-flex flex-column h-100">
            <div className="w-100 m-0 d-flex justify-content-between">
                <div className='p-0 pb-2'>
                    <h5 className="m-0">Income</h5>
                </div>
                <div className="p-0">
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
                </div>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                density="compact"
                className="table_styles"
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
        </div>
    );
}
