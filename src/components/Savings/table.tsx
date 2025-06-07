'use client'

import { createSavings, deleteSavings, listSavings, patchSavings } from "@/api/Savings";
import { SavingsInSchema, SavingsOutSchema } from "@/types";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid"
import { useState } from "react";
import { Stack, Row, Col, Button } from "react-bootstrap";

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
        field: 'date',
        headerName: 'Date',
        width: 94,
    },
];

function CustomFooter({ rows }: { rows: SavingsOutSchema[] }) {

}

export default function SavingsDataGrid(
    { rowData, month_id }: { rowData: SavingsOutSchema[], month_id: SavingsOutSchema['month']['id'] }
) {
    const [rows, setRows] = useState<Array<SavingsOutSchema>>(rowData);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [canDelete, setCanDelete] = useState(0);

    const handleRowCreate = async () => {
        await createSavings({month_id: month_id});
        setRows(await listSavings({month_id}));
    };

    const handleRowDelete = async () => {
        await deleteSavings(selectedRows as Array<SavingsOutSchema['id']>);
        setRows(await listSavings({month_id}));
    };

    const handleRowUpdate = async (
        newRow: any,
        oldRow: any,
    ) => {
        const bodyPayload: Partial<SavingsInSchema> = {};

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
    }
    
        const handleCellEditStop = async () => {
            setRows(await listSavings({month_id}));
        }
    
        const handleRowUpdateError = (e: any) => {
            console.log(e)
        };

    return (
        <Stack gap={2}>
            <Row>
                <Col className='p-0'>
                    <h5 className="m-0">Savings</h5>
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
                </Col>
            </Row>
            <Row className="left_side_table">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    density="compact"
                    disableColumnMenu
                    disableColumnResize
                    className="p-0"
                    processRowUpdate={handleRowUpdate}
                    onCellEditStop={handleCellEditStop}
                    onProcessRowUpdateError={handleRowUpdateError}
                    checkboxSelection
                    onRowSelectionModelChange={(e) => {
                        setSelectedRows(e);
                        setCanDelete(e.length);
                    }}
                />
            </Row>
        </Stack>
    );
};