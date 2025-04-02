import { Suspense } from 'react';
import { getYearById } from '@/api/Year';
import FallbackComponentH1 from '@/components/FallbackComponent';
import './styles.scss';
import { getMonthsInYear } from '@/api/Month';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import Link from 'next/link';
import { components } from "@/types/schema";

type MonthSchema = components['schemas']['MonthSchema']
type YearSchema = components['schemas']['YearSchema']

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
    )
}

export default function YearView({ year_id }: { year_id: YearSchema['id'] }) {
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
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}