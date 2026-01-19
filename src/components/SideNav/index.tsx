'use client';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { YearOutSchema, MonthOutSchema } from '@/types';
import { SimpleTreeView, TreeItem, TreeItem2Icon } from '@mui/x-tree-view';
import { getAllTime } from '@/api/Time';
import { redirect } from "next/navigation";
import { House } from 'react-bootstrap-icons';
import { useAuthContext } from '@/context/auth';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/Auth';
import { InputBase, Menu, MenuItem, Select, styled } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        border: '1px solid #ced4da',
        fontSize: 20,
        padding: '10px 26px 5px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default function SideNav({show}: any) {
    
    const [yearsAndMonths, setYearsAndMonths] = useState([]);

    const router = useRouter();

    const handleItemSelectionToggle = (
        event: React.SyntheticEvent, 
        itemId: string,
        isSelected: boolean,
    ) => {
        if (isSelected) {
            if (itemId[0] === 'x') return;
            router.push(`/${itemId}`);
        }
    };

    const getUserQuery = useQuery(
        {
            queryKey: ['user'],
            queryFn: () => getUser(),
        }
    );

    useEffect(() => {
        getAllTime()
            .then((response) => {
                console.log('success', response);
                setYearsAndMonths(response);
            })
            .catch((error) => {
                console.log('error', error);
                setYearsAndMonths([]);                
            });
    }, []);

    return (
        <div className={`side_nav ${show?'animate-in':'animate-out'}`}>
            <Select
                className='w-100'
                value={2026}
                input={<BootstrapInput />}
                IconComponent={UnfoldMoreIcon}
            >
                {
                    yearsAndMonths.map((yearAndMonth: {
                    year: YearOutSchema,
                    months: Array<MonthOutSchema>
                }, indexA: number) => (
                        <MenuItem
                            value={yearAndMonth.year.year}
                        >
                            {yearAndMonth.year.year}
                        </MenuItem>
                    ))
                }
                <MenuItem style={{color: 'lightgray'}}>
                    <AddIcon fontSize='small' />
                    <div className='ms-1'>Year</div>
                </MenuItem>
            </Select>
            <hr />
            <SimpleTreeView
                onItemSelectionToggle={handleItemSelectionToggle}
            >
                <TreeItem
                    itemId='/'
                    label='Home'  
                />
                <TreeItem
                    itemId='accounts'
                    label='Acounts'
                />
                <TreeItem
                    itemId='transactions'
                    label='Transactions'
                />
                <TreeItem
                    itemId='goals'
                    label='Goals'
                />
                {
                    yearsAndMonths.map((yearAndMonth: {
                    year: YearOutSchema,
                    months: Array<MonthOutSchema>
                }, indexA: number) => (
                        <TreeItem itemId={`x${yearAndMonth.year.year}`} label={yearAndMonth.year.year} key={indexA}>
                            <TreeItem itemId={`${yearAndMonth.year.id}`} label='Overview' color='lightgray'/>
                            {
                                yearAndMonth.months.map((month: MonthOutSchema, indexB: number) => (
                                    <TreeItem itemId={`${yearAndMonth.year.id}/${month.id}`} label={month.month} key={indexB}/>
                                ))
                            }
                        </TreeItem>
                    ))
                }
                <TreeItem
                    itemId='settings'
                    label='Settings'
                />
                <TreeItem
                    itemId='about'
                    label='About'
                />
                <TreeItem
                    itemId='feedback'
                    label='Feedback'
                />
                <div>
                    {
                        getUserQuery?.data?.username
                    }
                </div>
            </SimpleTreeView>
        </div>
    );
}