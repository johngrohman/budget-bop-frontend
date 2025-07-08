import React from "react";
import { Card } from "react-bootstrap";
import './styles.scss';

export default function  CurrencyBox({ amount, heading }: { amount: string | 0, heading: string}) {
    return (
        <Card
            className="currency-card"
            border={heading==='LEFT TO BUDGET' && Number(amount) < 0 ? 'danger':''}
        >
            <div className="color-bar"/>
            <div className="amount-container">
                <h6 className="m-0">{heading}</h6>
                <h4>${amount}</h4>
            </div>
        </Card>
    );
}