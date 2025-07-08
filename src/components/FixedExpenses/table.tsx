'use client';
import { createFixedExpense, deleteFixedExpense, listFixedExpenses, patchFixedExpense } from "@/api/FixedExpenses";
import { useMonthViewContext } from "@/context/monthview";
import { FixedExpenseInSchema, FixedExpenseOutSchema, MonthSchema } from "@/types";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 170,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 170,
        editable: true,
    },
    {
        field: 'budget',
        headerName: 'Budget',
        width: 94,
        editable: true,
        valueFormatter: (c) => c!==null? `$${c}`:null,
    },
    {
        field: 'actual',
        headerName: 'Actual',
        width: 94,
        editable: true,
        valueFormatter: (c) => c!==null?`$${Number(c).toFixed(2)}`:null,
    },
    {
        field: 'diff',
        headerName: 'Diff',
        valueGetter: (value, row) => row.budget - row.actual,
        valueFormatter: (value) => {
            const isNeg = Math.sign(value) === -1;
            return `${isNeg?'-':''}$${Math.abs(value).toFixed(2)}`;
        },
        width: 94,
    },
];

function CustomFooter({ rows }: { rows: FixedExpenseOutSchema[] }) {

    const totalBudget = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.budget ?? 0), 0);
    }, [rows]);

    const totalActual = useMemo(() => {
        return rows.reduce((acc, row) => acc + (row.actual ?? 0), 0);
    }, [rows]);

    const totalDiff = useMemo(() => totalBudget - totalActual, [totalBudget, totalActual]);

    return (
        <div className="bg-light d-flex justify-content-center align-items-center border-top test">
            <span style={{ width: 50 }}>Total</span>
            <span style={{ width: 170 }} />
            <span style={{ width: 94 }}>${totalBudget.toFixed(2)}</span>
            <span style={{ width: 94 }}>${totalActual.toFixed(2)}</span>
            <span style={{ width: 94 }}>${totalDiff.toFixed(2)}</span>
        </div>
    );
}

export default function FixedExpenseDataGrid(
    { month_id }: { month_id: MonthSchema['id'] }
) {
    const [rows, setRows] = useState<Array<FixedExpenseOutSchema>>([]);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);
    const { getMonthData } = useMonthViewContext();

    useEffect(() => {
        listFixedExpenses({ month_id })
            .then((response) => {
                setRows(response);
            });
    }, []);

    const handleRowCreate = async () => {
        await createFixedExpense({month_id: month_id});
        setRows(await listFixedExpenses({ month_id }));
        getMonthData();
    };

    const handleRowDelete = async () => {
        await deleteFixedExpense(selectedRows as Array<FixedExpenseOutSchema['id']>);
        setRows(await listFixedExpenses({ month_id }));
        getMonthData();
    };

    const handleRowUpdate = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newRow: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        oldRow: any,
    ) => {
        
        const bodyPayload: Partial<FixedExpenseInSchema> = {month_id: month_id};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof FixedExpenseInSchema;
            if(newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchFixedExpense(newRow.id, bodyPayload);
            setRows(await listFixedExpenses({ month_id }));
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
                    <h5 className="m-0">Fixed Expenses</h5>
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
                slots={{footer: () => <CustomFooter rows={rows}/>}}
            />
        </div>
    );
}
