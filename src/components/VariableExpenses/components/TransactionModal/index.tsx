'use client'
import { useState } from "react";
import { useMonthViewContext } from "@/context/monthview";
import {
    Alert,
    Button,
    Col,
    FormControl,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Row
} from "react-bootstrap";
import { useToast } from "@/components/ToastSystem";
import { uploadTransactions } from "@/api/Transaction";
import TransactionTable from "./components/Table";
// import TransactionTable from "./components/table";
// import TransactionTableWrapper from "./components/Table";



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
            <ModalHeader closeButton className="px-4 border-0">
                <ModalTitle>Transactions</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="ps-4 pe-4 pb-4 mx-auto">
                <Alert
                    className="invisible"
                >Test</Alert>
                <Row className="justify-content-center">
                    <Col
                        md={7}
                    >
                        <FormControl
                            type={'file'}
                            onChange={handleFileChange}
                            accept='.csv'
                        />
                    </Col>
                    <Col md='auto'>
                        <Button
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    </Col>
                </Row>
                <br />
                <TransactionTable month_id={month_id} />
                </div>
            </ModalBody>
        </Modal>
    );
};