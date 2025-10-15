'use client'
import React, { useEffect, useState } from "react";
import '../../(app)/(year)/[year_id]/styles.scss';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { listTransactions } from "@/api/Transaction";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from "react-bootstrap";
import { Border, CloudUpload, CloudUploadFill } from "react-bootstrap-icons";
import { PieChart } from "@mui/x-charts";
import { useQuery } from "@tanstack/react-query";
import NoRowsOverlay from "@/components/GridOverlays";

interface TransactionOutSchema {
    items: Array<any>,
    count: number
}

export default function TransactionPage() {

    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 10,
    });

    const [sortingModel, setSortingModel] = useState<GridSortModel>(
        [
            {
                field: 'posting_date',
                sort: 'asc',
            },
        ]
    )
    console.log(sortingModel)
    const columns: GridColDef[] = [
        {
            field: "posting_date",
            headerName: "Posting Date",
            width: 160,
            type: 'date',
            valueGetter: (value) => {
                if (!value) return null;
                return new Date(value);
            },
            valueParser: (value) => {
                if (!value) return null
                return new Date(value);
            },
            editable: true,
        },
        {
            field: "effective_date",
            headerName: "Effective Date",
            width: 162,
            type: 'date',
            valueGetter: (value) => {
                if (!value) return null;
                return new Date(value);
            },
            valueParser: (value) => {
                if (!value) return null
                return new Date(value);
            },
            editable: true,
        },
        {
            field: "amount",
            headerName: "Amount",
            type: 'number',
            width: 94,
            editable: true,
            valueFormatter: (c) => `$${c}`,
        },
        {
            field: "category",
            headerName: "Category",
            width: 170,
            type: 'singleSelect',
            valueOptions: ['None', 'Restaurants & Dining', 'Groceries', 'Online Services', 'Credit Card Payments', 'Personal Care & Fitness', 'Home Supplies', 'Refunds/Adjustments', 'Clothing', 'Automotive Expenses', 'Shopping', 'Hobbies', 'Travel & Commute'],
            editable: true,
            valueFormatter: (value) => !value ? 'None' : value,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 300,
            editable: true,
            filterable: true,
        },
        {
            field: 'extended_description',
            headerName: 'Extended Description',
            width: 300,
            editable: true,
            filterable: true,
        },
    ];

    const getTransactionQuery = useQuery(
        {
            queryKey: [`getIncomeQuery`, paginationModel, sortingModel],
            queryFn: () => {
                const parameters: any = {
                    limit: paginationModel.pageSize,
                    offset: paginationModel.page*paginationModel.pageSize,
                }

                if (sortingModel[0]) {
                    parameters['order_by'] = sortingModel[0]?.field;
                    parameters['order_direction'] = sortingModel[0]?.sort;
                }
            
                return listTransactions(parameters)
            },
            initialData: {
                items: [],
                count: 0
            },
            placeholderData: (prev) => prev,
        }
    );

    return (
        <>
            <Modal
                show={false}
                centered
            >
                <ModalHeader closeButton>
                    <ModalTitle>Delete Transactions</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    You are about to permanently delete these transactions.
                    This action is permanent and cannot be undone.
                    Are you sure you want to delete these?
                </ModalBody>
                <ModalFooter>
                    <Button variant="light">
                        Cancel
                    </Button>
                    <Button variant="danger">
                        Delete
                    </Button>
                </ModalFooter>
            </Modal>
            <div className="d-flex justify-content-end">
                <Button>
                    <CloudUploadFill size={20} />
                    {' '}
                    Transactions
                </Button>
            </div>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Spending Over Time</CardTitle>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row >
                <Col md={9}>
                    <div className="w-100 m-0 d-flex justify-content-between">
                        <div className='p-0 pb-2'>
                            <h5 className="m-0" style={{color: 'hsl(220, 30%, 6%)'}}>All Transactions</h5>
                        </div>
                        <div className="p-0">
                            <Button
                                variant='link'
                                // className={`py-0 ${canDelete?'':'invisible'}`}
                                // onClick={handleRowDelete}
                            >
                                Delete
                            </Button>
                            <Button
                                variant='link'
                                className='p-0'
                                // onClick={handleRowCreate}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <DataGrid
                        rows={getTransactionQuery.data.items}
                        columns={columns}
                        rowCount={getTransactionQuery.data.count}
                        
                        loading={getTransactionQuery.isLoading}
                        slots={{
                            noRowsOverlay: () => <NoRowsOverlay text={'None'} />,
                        }}
                        slotProps={{
                            loadingOverlay: {
                                variant: 'skeleton',
                                noRowsVariant: 'skeleton',
                            },
                        }}
                        sortingMode='server'
                        sortModel={sortingModel}
                        onSortModelChange={setSortingModel}
                        paginationMode='server'
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        pageSizeOptions={[5, 10, 15, 25, 50, 100]}
                        checkboxSelection
                        density='compact'
                        style={{height: 'auto'}}
                    />
                </Col>
                <Col md={3}>
                    <Card className="" style={{width: '280px'}}>
                        <CardHeader>
                            <CardTitle>Transactions by Category</CardTitle>
                        </CardHeader>
                        <CardBody className="h-100">
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 1, value: Number(100), label: 'Restaurants & Dining' },
                                            { id: 2, value: Number(100), label: 'Groceries' },
                                            { id: 3, value: Number(100), label: 'Shopping' },
                                            { id: 4, value: Number(100), label: 'Automotive Expenses' },
                                            { id: 5, value: Number(100), label: 'Travel & Commute' },
                                            { id: 6, value: Number(100), label: 'Online Services' },
                                            { id: 7, value: Number(100), label: 'Hobbies' },
                                            { id: 8, value: Number(100), label: 'Clothing' },
                                        ],
                                        innerRadius: 60,
                                        outerRadius: 110,
                                        paddingAngle: 0,
                                        cornerRadius: 0,
                                        startAngle: 0,
                                        endAngle: 365,
                                        cx: 125,
                                        cy: 110,
                                    }
                                ]}
                                height={550}
                                // colors={['#468faf', '#2a6f97', '#01497c', '#012a4a']}
                                slotProps={{
                                    legend: {
                                        direction: 'column',
                                        position: {
                                            vertical: 'bottom',
                                            horizontal: 'left'
                                        },
                                        padding: 20,
                                        itemGap: 20,
                                        itemMarkHeight: 12.5,
                                        itemMarkWidth: 12.5,

                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
