"use client";

import {
    DataGrid,
    GridColDef,
    GridRowModesModel,
    GridRowsProp,
    GridRowSelectionModel
} from "@mui/x-data-grid";
import {
    keepPreviousData,
    MutationFunction,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import { Button, Col, Row, Stack } from "react-bootstrap";
import { IncomeInSchema, IncomeOutSchema, MonthSchema } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import { createIncome, deleteIncome, listIncome, patchIncome } from "@/api/Income";
import { useMonthViewContext } from "@/context/monthview";
import NoRowsOverlay from "../GridOverlays";

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
        width: 165,
        editable: true,
        sortable: false,
        resizable: false,
    },
    {
        field: "date",
        headerName: "Date",
        type: 'date',
        width: 115,
        valueGetter: (value) => {
            if (!value) return null;
            return new Date(value);
        },
        valueParser: (value) => {
            if (!value) return null;
            return new Date(value);
        },
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

    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);
    const { getMonthData } = useMonthViewContext();

    const queryClient = useQueryClient();

    const getIncomeQuery = useQuery(
        {
            queryKey: [`getIncomeQuery${month_id}`],
            queryFn: () => listIncome({month_id}),
            placeholderData: keepPreviousData,
            staleTime: 30000,
        }
    );

    const postIncomeMutation = useMutation(
        {
            mutationKey: ['postIncome'],
            mutationFn: createIncome,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [`getIncomeQuery${month_id}`]})
                    .then(() => getMonthData());
            }
        }
    );

    const patchIncomeMutation = useMutation(
        {
            mutationKey: ['patchIncome'],
            mutationFn: ({income_id, content}: {income_id: string, content: IncomeInSchema}) => patchIncome(income_id, content),
            onSuccess: (response) => {
                queryClient.invalidateQueries({ queryKey: [`getIncomeQuery${month_id}`]})
                    .then(() => getMonthData())
                    .then(() => response);
            }
        }
    );

    const deleteIncomeMutation = useMutation(
        {
            mutationKey: ['deleteIncome'],
            mutationFn: deleteIncome,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [`getIncomeQuery${month_id}`]})
                    .then(() => getMonthData());
            }
        }
    );

    const handleRowCreate = () => postIncomeMutation.mutate({month_id: month_id});

    const handleRowDelete = async () => deleteIncomeMutation.mutate(selectedRows as Array<IncomeOutSchema['id']>);

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
            if (bodyPayload.date) {
                bodyPayload.date = new Date(bodyPayload.date).toISOString().split("T")[0];
            }
        });

        return await patchIncomeMutation.mutateAsync({income_id: newRow.id, content: bodyPayload});
        
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRowUpdateError = (e: any) => {
        throw(e);
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
                rows={getIncomeQuery?.data || []}
                columns={columns}
                density="compact"
                className="table_styles"
                editMode="cell"
                disableColumnMenu
                disableColumnResize
                processRowUpdate={handleRowUpdate}
                loading={
                    getIncomeQuery.isFetching ||
                    postIncomeMutation.isPending ||
                    deleteIncomeMutation.isPending ||
                    patchIncomeMutation.isPending
                }
                slots={{
                    noRowsOverlay: () => <NoRowsOverlay text={'None'} />,
                    footer: () => <CustomFooter rows={getIncomeQuery?.data || []} />,
                }}
                slotProps={{
                    loadingOverlay: {
                        variant: 'linear-progress',
                        noRowsVariant: getIncomeQuery.isFetching ? 'skeleton' : 'linear-progress',
                    },
                }}
                onProcessRowUpdateError={handleRowUpdateError}
                checkboxSelection
                onRowSelectionModelChange={(e) => {
                    setSelectedRows(e);
                    setCanDelete(e.length);
                }}
            />
        </div>
    );
}
