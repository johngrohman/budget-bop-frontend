import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "react-bootstrap";
import styles from './styles.module.scss'

export default function BannerCard({
    color,
    title,
    text
}: {
    color: string,
    title: string,
    text: string
}) {
    return (
        <Card className={styles.banner_card_container}>
            <CardHeader style={{backgroundColor: color}} className={styles.banner_card_header}>&nbsp;</CardHeader>
            <CardBody className={styles.banner_card_body}>
                <div className={styles.banner_body_text_container}>
                    <p className={styles.banner_card_title}>{title}</p>
                    <p className={styles.banner_card_text}>{text}</p>
                </div>
            </CardBody>
        </Card>
    );
}