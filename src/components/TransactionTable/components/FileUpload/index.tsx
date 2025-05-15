'use client'
import { useState } from "react";
import { useMonthViewContext } from "@/context/monthview";
import {
    Alert,
    Button,
    FormControl,
    InputGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";
import { useToast } from "@/components/ToastSystem";
import { uploadTransactions } from "@/api/Transaction";

/**
 * File Upload modal used in Transaction Table. Used to upload transaction csv file
 * @returns Modal with UI for uploading transaction csv
 */
export default function FileUploadModal({month_id}: {month_id: string}) {
    const { addToast } = useToast();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const {
        showFileUploadModal,
        setShowFileUploadModal,
    } = useMonthViewContext();

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (selected) {
            setFile(selected);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            addToast('Please select a file first', 'danger');
            return;
        }
        setUploading(true);
        try {
            const result = await uploadTransactions(file, month_id);
            addToast('Transactions uploaded successfully', 'success');
            setShowFileUploadModal(false);
        } catch (error) {
            addToast('Failed to upload transactions', 'danger');
        } finally {
            setUploading(false);
        }
    };

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
                <div className="w-75 mx-auto">
                <Alert
                    className="invisible"
                >Test</Alert>
                <FormControl
                    type={'file'}
                    onChange={handleFileChange}
                    accept='.csv'
                />
                <br />
                <br />
                <br />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </ModalFooter>
        </Modal>
    );
};