import Link from "next/link";
import React from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function Navigation() {
    return (
        <Nav>
            <NavItem>
                <Link href={'/'}>
                    Dashboard
                </Link>
            </NavItem>
            <NavItem>
                <Link href={'/about'}>
                    About
                </Link>
            </NavItem>
            <NavItem>
                <Link href={'/jan'}>
                    January
                </Link>
            </NavItem>
        </Nav>
    );
}