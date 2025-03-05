'use client'
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from './titlebar.module.scss';
import { List } from "react-bootstrap-icons";
import Navigation from "../navigation";

export default function TitleBar() {
    const [showNav, setShowNav] = useState<boolean>(false);

    return (
        <div className={styles.titlebar}>
            <Navigation show={showNav} setShow={setShowNav} />
            <Button
                onClick={() => setShowNav(true)}
                className="d-flex justify-content-center align-items-center"
                variant=""
            >
                <List size={25} />
            </Button>
            <div className={styles.drag_container} />
        </div>
    );
}