import React from "react";
import styles from './titlebar.module.scss';
import { ArrowClockwise, ArrowLeft, ArrowRight, LayoutSidebar, Person } from "react-bootstrap-icons";
import { useRouter } from "next/navigation";

export default function TitleBar({showNav, setShowNav, showUser, setShowUser}: any) {

    const router = useRouter();
    const buttonSize = 19;

    return (
        <div className={styles.titlebar}>
            <div
                onClick={() => setShowNav(!showNav)}
                className={styles.control_button}
            >
                <LayoutSidebar size={buttonSize} fill="#363636" />
            </div>
            <div
                onClick={router.back}
                className={styles.control_button}
            >
                <ArrowLeft size={buttonSize} fill="#363636" />
            </div>
            <div
                onClick={router.forward}
                className={styles.control_button}
            >
                <ArrowRight size={buttonSize} fill="#363636" />
            </div>
            <div className={styles.drag_container} />
            <div
                onClick={() => setShowUser(true)}
                className={styles.control_button}
            >
                <Person size={buttonSize} fill="#363636" />
            </div>
        </div>
    );
}