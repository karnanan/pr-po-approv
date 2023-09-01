import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, Modal, useAccordionButton, FloatingLabel } from 'react-bootstrap';
import PODetail from '../../../components/PODetails/PODetails';

const CustomToggle = ({ children, eventKey }: { children: any; eventKey: string }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {});

    return (
        <h5 className="m-0">
            <Link to="#" className="text-dark" onClick={decoratedOnClick}>
                {children}
            </Link>
        </h5>
    );
};

const PODetailModal = () => {
    const [PODetailsModal, setPODetailsModal] = useState<boolean>(false);

    // Show/hide the modal
    const togglePODetailsModal = () => {
        setPODetailsModal(!PODetailsModal);
    };

    return (
        <>
            <Button
                variant="soft-primary"
                size="sm"
                className="waves-effect waves-light"
                onClick={togglePODetailsModal}>
                ดำเนินการ
            </Button>

            <Modal show={PODetailsModal} onHide={togglePODetailsModal}>
                {/* <Modal.Header closeButton>
                    <h4 className="modal-title">ใบเสนอซื้อ</h4>
                </Modal.Header> */}
                <Modal.Body>
                    <PODetail />
                </Modal.Body>

                <Modal.Footer>
                    <div className="row col-12">
                        <div className="col-md-6">
                            <div className="mb-3"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-userreq"
                                        placeholder="123456"
                                        required
                                    />
                                </FloatingLabel>
                                <div className="float-end">
                                    <button
                                        type="submit"
                                        className="btn btn-success waves-effect waves-light me-1"
                                        onClick={togglePODetailsModal}>
                                        อนุมัติ
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger waves-effect "
                                        onClick={togglePODetailsModal}>
                                        ปิด
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PODetailModal;
