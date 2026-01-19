'use client';
import { createFixedExpense, deleteFixedExpense, listFixedExpenses, patchFixedExpense } from "@/api/FixedExpenses";
import { useMonthViewContext } from "@/context/monthview";
import { FixedExpenseInSchema, FixedExpenseOutSchema, MonthSchema } from "@/types";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import NoRowsOverlay from "../GridOverlays";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
        type: 'date',
        valueGetter: (value) => {
            if (!value) return null; 
            return new Date(value);
        },
        valueParser: (value) => {
            if (!value) return null;
            return new Date(value);
        },
        width: 115,
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
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);
    const { getMonthData } = useMonthViewContext();

    const queryClient = useQueryClient();

    const getFixedExpensesQuery = useQuery(
        {
            queryKey: [`getFixedExpenseQuery${month_id}`],
            queryFn: () => listFixedExpenses({month_id}),
            placeholderData: keepPreviousData,
            staleTime: 30000,
        }
    );

    const postFixedExpenseMutation = useMutation(
        {
            mutationKey: ['postFixedExpense'],
            mutationFn: createFixedExpense,
            onSuccess: (response) => {
                queryClient.invalidateQueries({ queryKey: [`getFixedExpenseQuery${month_id}`]})
                    .then(() => getMonthData())
                    .then(() => response);
            },
        }
    );

    const patchFixedExpenseMutation = useMutation(
        {
            mutationKey: ['patchFixedExpense'],
            mutationFn: ({fixed_expense_id, content}: {fixed_expense_id: string, content: FixedExpenseInSchema }) => patchFixedExpense(fixed_expense_id, content),
            onSuccess: (response) => {
                queryClient.invalidateQueries({ queryKey: [`getFixedExpenseQuery${month_id}`]})
                    .then(() => getMonthData())
                    .then(() => response);
            }
        }
    );

    const deleteFixedExpenseMutation = useMutation(
        {
            mutationKey: ['deleteFixedExpense'],
            mutationFn: deleteFixedExpense,
            onSuccess: (response) => {
                queryClient.invalidateQueries({ queryKey: [`getFixedExpenseQuery${month_id}`]})
                    .then(() => getMonthData())
                    .then(() => response);
            }
        }
    );

    const handleRowCreate = () => postFixedExpenseMutation.mutate({month_id: month_id});

    const handleRowDelete = () => deleteFixedExpenseMutation.mutate(selectedRows as Array<FixedExpenseOutSchema['id']>);

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
            if (bodyPayload.date) {
                bodyPayload.date = new Date(bodyPayload.date).toISOString().split("T")[0];
            }
        });

        return await patchFixedExpenseMutation.mutateAsync({fixed_expense_id: newRow.id, content: bodyPayload});
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
                rows={getFixedExpensesQuery?.data || []}
                columns={columns}
                density="compact"
                className="table_styles"
                disableColumnMenu
                disableColumnResize
                disableColumnSorting
                processRowUpdate={handleRowUpdate}
                onCellEditStop={handleCellEditStop}
                onProcessRowUpdateError={handleRowUpdateError}
                checkboxSelection
                loading={
                    getFixedExpensesQuery.isFetching ||
                    postFixedExpenseMutation.isPending ||
                    deleteFixedExpenseMutation.isPending ||
                    patchFixedExpenseMutation.isPending
                }
                onRowSelectionModelChange={(e) => {
                    setSelectedRows(e);
                    setCanDelete(e.length);
                }}
                slots={{
                    noRowsOverlay: () => <NoRowsOverlay text={'None'} />,
                    footer: () => <CustomFooter rows={getFixedExpensesQuery?.data || []}/>
                }}
                slotProps={{
                    loadingOverlay: {
                        variant: 'linear-progress',
                        noRowsVariant: 'skeleton',
                    },
                }}
            />
        </div>
    );
}
