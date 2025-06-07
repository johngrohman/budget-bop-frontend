'use client'
import { createFixedExpense, deleteFixedExpense, patchFixedExpense } from "@/api/FixedExpenses";
import { FixedExpenseInSchema, FixedExpenseOutSchema } from "@/types";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import { fetchFixedExpense } from ".";
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
        renderCell: (cell) => cell.value ? `$${cell.value}` : '',
    },
    {
        field: 'actual',
        headerName: 'Actual',
        width: 94,
        editable: true,
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
    { rowData, month_id }: { rowData: FixedExpenseOutSchema[], month_id: FixedExpenseOutSchema['month']['id'] }
) {
    const [rows, setRows] = useState<Array<FixedExpenseOutSchema>>(rowData);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);

    const handleRowCreate = async () => {
        await createFixedExpense({month_id: month_id});
        setRows(await fetchFixedExpense(month_id));
    }

    const handleRowDelete = async () => {
        await deleteFixedExpense(selectedRows as Array<FixedExpenseOutSchema['id']>);
        setRows(await fetchFixedExpense(month_id));
    }

    const handleRowUpdate = async (
        newRow: any,
        oldRow: any,
    ) => {
        
        const bodyPayload: Partial<FixedExpenseOutSchema> = {};

        Object.keys(newRow).forEach((key) => {
            const typedKey = key as keyof FixedExpenseOutSchema;
            if(newRow[typedKey] !== oldRow[typedKey]) {
                const newValue = newRow[typedKey] === '' ? null : newRow[typedKey];
                bodyPayload[typedKey] = newValue;
            }
        });

        try {
            const updatedRow = await patchFixedExpense(newRow.id, bodyPayload);
            return updatedRow;
        } catch (error) {
            console.error('Row update failed', error);
            throw error;
        }
    };

    const handleCellEditStop = async () => {
        setRows(await fetchFixedExpense(month_id));
    };

    const handleRowUpdateError = (e: any) => {
        console.log(e);
    };

    return (
        <Stack gap={2}>
            <Row>
                <Col className='p-0'>
                    <h5 className="m-0">Fixed Expenses</h5>
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
            <Row className="left_side_table">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    density="compact"
                    className="p-0"
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
            </Row>
        </Stack>
    );
}
