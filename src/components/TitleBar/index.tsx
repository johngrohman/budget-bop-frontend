import React from "react";
import styles from './titlebar.module.scss';
import { ArrowClockwise, ArrowLeft, ArrowRight, LayoutSidebar, Person } from "react-bootstrap-icons";
import { useRouter } from "next/navigation";
import { IconLayoutSidebar, IconArrowLeft, IconArrowRight, IconUser } from '@tabler/icons-react';

export default function TitleBar({showNav, setShowNav, showUser, setShowUser}: any) {

    const router = useRouter();
    const buttonSize = 19;

    return (
        <div className={styles.titlebar}>
            <div
                onClick={() => setShowNav(!showNav)}
                className={styles.control_button}
            >
                <IconLayoutSidebar size={buttonSize} color="#363636" stroke={1.5} />
            </div>
            <div
                onClick={router.back}
                className={styles.control_button}
            >
                <IconArrowLeft size={buttonSize} color="#363636" stroke={1.5} />
            </div>
            <div
                onClick={router.forward}
                className={styles.control_button}
            >
                <IconArrowRight size={buttonSize} color="#363636" stroke={1.5} />
            </div>
            <div className={styles.drag_container} />
            <div
                onClick={() => setShowUser(true)}
                className={styles.control_button}
            >
                <IconUser size={buttonSize} color="#363636" stroke={1.5} />
            </div>
        </div>
    );
}