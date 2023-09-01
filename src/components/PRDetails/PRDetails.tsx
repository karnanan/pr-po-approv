import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// hooks
import { usePageTitle } from '../../hooks';

// data
import { PRItemDetails } from './data';

const PRDetail = () => {
    return (
        <Row>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <div className="panel-body">
                            <div className="clearfix">
                                <div className="float-start">
                                    <h3>ใบเสนอซื้อ</h3>
                                </div>
                                {/* <div className="float-end">
                                    <h4>
                                        เลขที่ :<strong>{PRItemDetails.pr_id}</strong>
                                    </h4>
                                </div> */}
                            </div>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    {/* <div className="float-start mt-3">
                                        <address>
                                            <strong>{PRItemDetails.address.owner}</strong>
                                            <br />
                                            {PRItemDetails.address.line_1}
                                            <br />
                                            {PRItemDetails.address.city}, {PRItemDetails.address.state}{' '}
                                            {PRItemDetails.address.zip}
                                            <br />
                                            <abbr title="Phone">P:</abbr> {PRItemDetails.address.phone}
                                        </address>
                                    </div> */}
                                    <div className="float-start mt-2">
                                        <p>
                                            <strong>เลขที่ใบเสนอซื้อ : </strong> {PRItemDetails.pr_id}
                                        </p>
                                        <p>
                                            <strong>วันที่เสนอซื้อ : </strong> {PRItemDetails.pr_date}
                                        </p>
                                        <p>
                                            <strong>สถานะเอกสาร : </strong> {PRItemDetails.pr_status}
                                        </p>
                                        <p>
                                            <strong>ผู้สอบทาน : </strong> {PRItemDetails.preapprove_name}
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Cost</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(PRItemDetails.items || []).map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>{item.unit_cost}</td>
                                                            <td>{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xl={6} xs={6} className="col-xl-6 col-6">
                                    <div className="clearfix mt-2">
                                        <h5 className="small text-dark fw-normal">หมายเหตุ : </h5>
                                        <small>
                                            All accounts are to be paid within 7 days from receipt of invoice. To be
                                            paid by cheque or credit card or direct payment online.
                                        </small>
                                    </div>
                                </Col>
                                <Col xs={6} xl={6} className="col-xl-6 col-6 ">
                                    <div className="clearfix mt-2">
                                        <p className="text-end">
                                            <b>ราคารวม:</b> {PRItemDetails.sub_total}
                                        </p>
                                        <p className="text-end">ส่วนลด: {PRItemDetails.discount}</p>
                                        <p className="text-end">VAT: {PRItemDetails.vat}%</p>
                                        <hr />
                                        <h4 className="text-end">รวมสุทธิ {PRItemDetails.total}</h4>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            {/* <div className="d-print-none">
                                <div className="float-end">
                                    <Link
                                        to="#"
                                        className="btn btn-dark waves-effect waves-light me-1"
                                        onClick={(e) => {
                                            window.print();
                                        }}>
                                        <i className="fa fa-print"></i>
                                    </Link>

                                    <Link to="#" className="btn btn-primary waves-effect waves-light">
                                        Submit
                                    </Link>
                                </div>
                                <div className="clearfix"></div>
                            </div> */}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default PRDetail;
