import React from 'react';
import { Suspense } from 'react';
import { getYearById } from '@/api/Year';
import FallbackComponentH1 from '@/components/FallbackComponent';
import { getMonthsInYear } from '@/api/Month';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import Link from 'next/link';
import './styles.scss';
import { MonthSchema, YearSchema } from '@/types';
import { LineChart } from '@mui/x-charts';

async function YearComponent({ id }: { id: string }) {
    const year = await getYearById(id);
    return <h1 className="page_heading">{year.year}</h1>;
}

async function MonthComponents({ id }: { id: string }) {
    const months = await getMonthsInYear(id);
    return (
        months.map((month: MonthSchema, index: number) => (
            <Link
                href={`${id}/${month.id}`}
                key={index}
            >
                <Card className='p-1'>
                    {month.month}
                </Card>
            </Link>
        ))
    );
}

export default async function YearView({ year_id }: { year_id: YearSchema['id'] }) {

    const year_data = await getMonthsInYear(year_id)

    return (
        <div className="page_container">
            <Container fluid>
                <Row>
                    <Suspense fallback={<FallbackComponentH1 size={1} />}>
                        <YearComponent id={year_id} />
                    </Suspense>
                </Row>
                <Row>
                    <Col xs={2} className='d-flex'>
                        <Stack gap={4} key={1}>
                            <MonthComponents id={year_id} key={2}/>
                        </Stack>
                    </Col>
                    <Col>
                        <LineChart
                            xAxis={[
                                { 
                                    data: [
                                        'Jan',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dec',
                                    ],
                                    scaleType: 'point'
                                }
                            ]}
                            series={[
                                {
                                    data: year_data.map((year) => (year.total_variable_expenses?.actual || null)),
                                    label: 'Variable Expenses',
                                },
                            ]}
                            height={300}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}