'use client'
import React, { useEffect, useState } from "react";
import { Container, Nav, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { getAllTime } from "@/api/Time";
import { redirect } from "next/navigation";
import { components } from "@/types/schema";

interface Navigation {
    show: boolean,
    setShow: (value: boolean) => void,
}

export default function Navigation({show, setShow}: Navigation) {
    
    const [yearsAndMonths, setYearsAndMonths] = useState([]);

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
                    <SimpleTreeView onItemSelectionToggle={handleItemSelectionToggle}>
                        {
                            yearsAndMonths.map((yearAndMonth: {
                                year: components['schemas']['YearOutSchema'],
                                months: Array<components['schemas']['MonthOutSchema']>
                            }, indexA: number) => (
                                <TreeItem itemId={`x${yearAndMonth.year.year}`} label={yearAndMonth.year.year} key={indexA}>
                                    <TreeItem itemId={`${yearAndMonth.year.id}`} label='Overview' />
                                    {
                                        yearAndMonth.months.map((month: components['schemas']['MonthOutSchema'], indexB: number) => (
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