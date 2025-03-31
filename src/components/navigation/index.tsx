'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, NavItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from "react-bootstrap";
import { getYears } from "../../api/year";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { getMonthsInYear } from "@/api/month";
import { getAllTime } from "@/api/time";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface Navigation {
    show: boolean,
    setShow: Function
}

interface Year {
    id: string,
    year: string
}

export default function Navigation({show, setShow}: Navigation) {

    const [years, setYears] = useState<Year[]>([]);
    const [yearsAndMonths, setYearsAndMonths] = useState([]);
    const [selected, setSelected] = useState('')

    const getYearsData = () => {
        getYears()
        .then((response) => setYears(response))
    }

    const getTimeData = () => {
        getAllTime()
        .then((response) => setYearsAndMonths(response));
    }

    const handleItemSelectionToggle = (
        event: React.SyntheticEvent,
        itemId: string,
        isSelected: boolean,
    ) => {
        if (isSelected) {
            if (itemId[0] === 'x') return;
            redirect(`/${itemId}`);
        }
    }

    useEffect(() => {
        getTimeData();
    }, []);

    return (
        <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            backdrop={false}
        >
            <br />
            <OffcanvasHeader closeButton>
                <OffcanvasTitle as={"h3"}>
                    Budget Bop
                </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
            <Nav>
                <Container>
                    <Row >
                        {selected}
                    </Row>
                    <SimpleTreeView onItemSelectionToggle={handleItemSelectionToggle}>
                        {
                            yearsAndMonths.map((yearAndMonth: any, indexA: number) => (
                                <TreeItem itemId={`x${yearAndMonth.year.year}`} label={yearAndMonth.year.year} key={indexA}>
                                    <TreeItem itemId={`${yearAndMonth.year.id}`} label='Overview' />
                                    {
                                        yearAndMonth.months.map((month: any, indexB: number) => (
                                            <TreeItem itemId={`${yearAndMonth.year.id}/${month.id}`} label={month.month} key={indexB}/>
                                        ))
                                    }
                                </TreeItem>
                            ))
                        }
                        <TreeItem itemId="x-add-year" label='Add Year'/>
                    </SimpleTreeView>
                </Container>
            </Nav>
            </OffcanvasBody>
        </Offcanvas>
    );
}