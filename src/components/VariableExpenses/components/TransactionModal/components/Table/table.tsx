'use client'
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { FixedExpenseOutSchema, TransactionOutSchema } from "@/types";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { deleteFixedExpense } from "@/api/FixedExpenses";
import { deleteTransactions } from "@/api/Transaction";
import { fetchTransactionData } from ".";

const columns: GridColDef[] = [
    {
        field: "date",
        headerName: "Date",
        width: 125,
        editable: true,
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 94,
        editable: true,
        valueFormatter: (c) => `$${c}`,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 250,
        editable: true,
    },
    {
        field: "category",
        headerName: "Category",
        width: 170,
        editable: true
    },
];

export default function TransactionDataGrid(
    { rowData, month_id }:
    { rowData: TransactionOutSchema[], month_id: TransactionOutSchema['month']['id'] }
) {

    useEffect(() => {
        setRows(rowData);
    }, [rowData]);

    const [rows, setRows] = useState<Array<TransactionOutSchema>>(rowData);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);

    const handleRowDelete = async () => {
        await deleteTransactions(selectedRows as Array<TransactionOutSchema['id']>);
        setRows(await fetchTransactionData(month_id));
    }


    return (
        <Stack gap={2}>
            <Row>
                {/* <Col className="d-flex align-items-end">
                    <h5>Transactions</h5>
                </Col> */}
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
                        // className='p-0'
                        // onClick={handleRowCreate}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
            <div style={{height: '250px'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooterPagination={true}
                    disableColumnMenu
                    disableRowSelectionOnClick
                    checkboxSelection
                    // sx={{padding: '0'}}
                    density="compact"
                    hideFooter
                    onRowSelectionModelChange={(e) => {
                        setSelectedRows(e);
                        setCanDelete(e.length);
                    }}
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
            </div>
        </Stack>
    );
}
