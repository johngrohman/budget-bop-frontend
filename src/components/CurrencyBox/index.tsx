import { Card } from "react-bootstrap";
import './styles.scss';

export default function  CurrencyBox({ amount }: { amount: string}) {
    return (
        <Card className="currency-card">
            <div className="color-bar"/>
            <div className="amount-container">
                <h4>{amount}</h4>
            </div>
        </Card>
    )
}