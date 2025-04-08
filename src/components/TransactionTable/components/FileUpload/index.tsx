'use client'
import { useMonthViewContext } from "@/context/monthview";
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";

/**
 * File Upload modal used in Transaction Table. Used to upload transaction csv file
 * @returns Modal with UI for uploading transaction csv
 */
export default function FileUploadModal() {

    const {
        showFileUploadModal,
        setShowFileUploadModal,
    } = useMonthViewContext();

    return (
        <Modal
            show={showFileUploadModal}
            onHide={() => setShowFileUploadModal(false)}
            centered
            size="lg"
        >
            <ModalHeader closeButton>
                <ModalTitle>Upload CSV</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Test
            </ModalBody>
            <ModalFooter>
                Test
            </ModalFooter>
        </Modal>
    );
}