import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { CardProps } from "react-bootstrap";
import styles from './styles.module.scss';

interface BannerCardProps extends CardProps {
    color: string,
    title: string,
    text: string
}

export default function BannerCard({ title, text, ...rest }: BannerCardProps) {
    return (
        <Card className={styles.banner_card_container} {...rest}>
            {/* <CardHeader style={{backgroundColor: color}} className={styles.banner_card_header}>&nbsp;</CardHeader> */}
            <CardBody className={styles.banner_card_body}>
                <div className={styles.banner_body_text_container}>
                    <p className={styles.banner_card_title}>{title}</p>
                    <p className={styles.banner_card_text}>{text}</p>
                </div>
            </CardBody>
        </Card>
    );
}