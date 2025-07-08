'use client';

import React, { useEffect, useMemo, useState } from "react";
import { createSavings, deleteSavings, listSavings, patchSavings } from "@/api/Savings";
import { MonthSchema, SavingsInSchema, SavingsOutSchema } from "@/types";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Stack, Row, Col, Button } from "react-bootstrap";
import { useMonthViewContext } from "@/context/monthview";

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 160,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 94,
    },
    {
        field: 'budget',
        headerName: 'Budget',
        width: 94,
        editable: true,
        renderCell: (cell) => cell.value ? `$${cell.value}` : '',
    },
    {
        field: 'actual',
        headerName: 'Actual',
        width: 94,
        editable: true,
        renderCell: (cell) => cell.value?`$${cell.value.toFixed(2)}`:'',
    },
];

function CustomFooter({ rows }: { rows: SavingsOutSchema[] }) {
    const totalBudget = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.budget ?? 0), 0);
    }, [rows]);

    const totalActual = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.actual ?? 0), 0);
    }, [rows]);

    return (
        <div className="bg-light d-flex justify-content-center align-items-center border-top test">
            <span style={{ width: 50 }}>Total</span>
            <span style={{ width: 170 }} />
            <span style={{ width: 94 }} />
            <span style={{ width: 94 }}>${totalBudget.toFixed(2)}</span>
            <span style={{ width: 94 }}>${totalActual.toFixed(2)}</span>
        </div>
    );
}

export default function SavingsDataGrid(
    { month_id }: { month_id: MonthSchema['id'] }
) {
    const [rows, setRows] = useState<Array<SavingsOutSchema>>([]);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);
    const { getMonthData } = useMonthViewContext();

    useEffect(() => {
        listSavings({ month_id })
            .then((response) => {
                setRows(response);
            });
    }, []);

    const handleRowCreate = async () => {
        await createSavings({month_id: month_id});
        setRows(await listSavings({month_id}));
        getMonthData();
    };

    const handleRowDelete = async () => {
        await deleteSavings(selectedRows as Array<SavingsOutSchema['id']>);
        setRows(await listSavings({month_id}));
        getMonthData();
    };

    const handleRowUpdate = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newRow: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        oldRow: any,
    ) => {
        const bodyPayload: Partial<SavingsInSchema> = {month_id: month_id};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof SavingsInSchema;
            if (newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchSavings(newRow.id, bodyPayload);
            return updatedRow;
        } catch (error) {
            console.error("Row update failed", error);
            throw error;
        }
    };
    
    const handleCellEditStop = async () => {
        setRows(await listSavings({month_id}));
        getMonthData();
    };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRowUpdateError = (e: any) => {
        console.log(e);
    };

    return (
        <div className="h-100 w-75 d-flex flex-column">
            <div className="w-100 m-0 d-flex justify-content-between">
                <div className='p-0 pb-2'>
                    <h5 className="m-0">Savings</h5>
                </div>
                <div className="p-0">
                    <Button
                        variant='link'
                        className={`p-0 ${canDelete?'':'invisible'}`}
                        onClick={handleRowDelete}
                    >
                        Delete
                    </Button>
                    <Button
                        variant='link'
                        className='py-0'
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
                disableColumnMenu
                disableColumnResize
                className="table_styles"
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
};