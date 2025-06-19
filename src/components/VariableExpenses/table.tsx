'use client';

import React, { useEffect, useMemo, useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useMonthViewContext } from "@/context/monthview";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { MonthSchema, VariableExpenseInSchema, VariableExpenseOutSchema } from "@/types";
import { createVariableExpense, deleteVariableExpense, listVariableExpenses, patchVariableExpense } from "@/api/VariableExpense";
import './styles.scss';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 170,
        editable: true,
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
        renderCell: (cell) => cell.value?`$${cell.value.toFixed(2)}`:'',
    },
    {
        field: 'diff',
        headerName: 'Diff',
        valueGetter: (value, row) => row.budget - row.actual,
        valueFormatter: (value) => {
            const isNeg = Math.sign(value) === -1;
            return value?`${isNeg?'-':''}$${Math.abs(value).toFixed(2)}`:'';
        },
        width: 94,
    },
];

function CustomFooter({ rows }: { rows: VariableExpenseOutSchema[] }) {

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

export default function VariableExpenseDataGrid(
    { month_id }: { month_id: MonthSchema['id'] }
) {
    const [rows, setRows] = useState<Array<VariableExpenseOutSchema>>([]);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);

    const { setShowFileUploadModal } = useMonthViewContext();
    
    useEffect(() => {
        listVariableExpenses({ month_id })
            .then((response) => {
                setRows(response);
            });
    }, []);

    const handleRowCreate = async () => {
        await createVariableExpense({month_id: month_id});
        setRows(await listVariableExpenses({month_id}));
    };

    const handleRowDelete = async () => {
        await deleteVariableExpense(selectedRows as Array<VariableExpenseOutSchema['id']>);
        setRows(await listVariableExpenses({month_id}));
    };

    const handleRowUpdate = async (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newRow: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        oldRow: any,
    ) => {
        const bodyPayload: Partial<VariableExpenseInSchema> = {};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof VariableExpenseInSchema;
            if (newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchVariableExpense(newRow.id, bodyPayload);
            return updatedRow;
        } catch (error) {
            console.error("Row update failed", error);
            throw error;
        }
    };

    const handleCellEditStop = async () => {
        setRows(await listVariableExpenses({month_id}));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRowUpdateError = (e: any) => {
        console.log(e);
    };

    return (
        <Stack gap={2} className="h-100">
            <Row className="w-100 m-0">
                <Col className='p-0'>
                    <h5 className="m-0">Variable Expenses</h5>
                </Col>
                <Col align='right' className="p-0">
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
                    <Button
                        variant='link'
                        className='p-0'
                        onClick={() => setShowFileUploadModal(true)}
                    >
                        Transactions
                    </Button>
                </Col>
            </Row>
            <Row className="m-0" style={{height: 'auto'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    density="compact"
                    disableColumnMenu
                    disableColumnResize
                    className="variable_expense_table_container"
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
