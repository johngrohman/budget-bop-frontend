'use client'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { TransactionOutSchema } from "@/types";
import { Button, Col, Row, Stack } from "react-bootstrap";

const columns: GridColDef[] = [
    {
        field: "date",
        headerName: "Date",
        width: 125,
        editable: true 
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

export default function TransactionDataGrid({ rowData }: { rowData: TransactionOutSchema[] }) {

    return (
        <Stack gap={2}>
            <Row>
                {/* <Col className="d-flex align-items-end">
                    <h5>Transactions</h5>
                </Col> */}
                <Col align='right' className="p-0">
                    <Button
                        variant='link'
                        className="p-0"
                        // className={`p-0 ${canDelete?'':'invisible'}`}
                        // onClick={handleRowDelete}
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
                    hideFooter
                    hideFooterPagination={true}
                    disableRowSelectionOnClick
                    checkboxSelection
                    rows={rowData}
                    sx={{padding: '0'}}
                    columns={columns}
                    density="compact"
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
