'use client';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

export default function FallbackComponentH1({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h1'} xs={size} bg='light'/>
        </Placeholder>
    );
};

export function FallbackComponentH2({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h2'} xs={size} bg='light'/>
        </Placeholder>
    );
};

export function FallbackComponentH3({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h3'} xs={size} bg='light'/>
        </Placeholder>
    );
};

export function FallbackComponentH4({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h4'} xs={size} bg='light'/>
        </Placeholder>
    );
};

export function FallbackComponentH5({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h5'} xs={size} bg='light'/>
        </Placeholder>
    );
};

export function FallbackComponentH6({ size }: { size: number }) {
    return (
        <Placeholder animation='glow' >
            <Placeholder as={'h6'} xs={size} bg='light'/>
        </Placeholder>
    );
};

