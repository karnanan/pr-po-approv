import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, Modal, useAccordionButton, FloatingLabel } from 'react-bootstrap';
import PRDetail from '../../../components/PRDetails/PRDetails';

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

const PRDetailModal = () => {
    const [PRDetailsModal, setPRDetailsModal] = useState<boolean>(false);

    // Show/hide the modal
    const togglePRDetailsModal = () => {
        setPRDetailsModal(!PRDetailsModal);
    };

    return (
        <>
            <Button
                variant="soft-primary"
                size="sm"
                className="waves-effect waves-light"
                onClick={togglePRDetailsModal}>
                ดำเนินการ
            </Button>

            <Modal show={PRDetailsModal} onHide={togglePRDetailsModal}>
                {/* <Modal.Header closeButton>
                    <h4 className="modal-title">ใบเสนอซื้อ</h4>
                </Modal.Header> */}
                <Modal.Body>
                    <PRDetail />
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
                                        onClick={togglePRDetailsModal}>
                                        อนุมัติ
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger waves-effect "
                                        onClick={togglePRDetailsModal}>
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

export default PRDetailModal;
