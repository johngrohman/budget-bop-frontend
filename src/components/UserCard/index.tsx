import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";

export default function UserCard({showModal, setShowModal}: any) {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle>Test</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Test
            </ModalBody>
            <ModalFooter>Test</ModalFooter>
        </Modal>
    );
}