'use client'
import { useMonthViewContext } from "@/context/monthview";
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";
import { useToast } from "@/components/ToastSystem";
/**
 * File Upload modal used in Transaction Table. Used to upload transaction csv file
 * @returns Modal with UI for uploading transaction csv
 */
export default function FileUploadModal() {

    const { addToast } = useToast();

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
                <Button
                    onClick={() => addToast('Error when uploading file', 'success')}
                >
                    Test
                </Button>
            </ModalBody>
            <ModalFooter>
                Test
            </ModalFooter>
        </Modal>
    );
}