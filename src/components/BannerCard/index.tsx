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
            <CardHeader style={{backgroundColor: color}} className={styles.banner_card_header}></CardHeader>
            <CardBody className={styles.banner_card_body}>
                <div className={styles.banner_body_text_container}>
                    <CardText className={styles.banner_card_title}>{title}</CardText>
                    <CardTitle className={styles.banner_card_text}>{text}</CardTitle>
                </div>
            </CardBody>
        </Card>
    );
}