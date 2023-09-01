import { Badge, Card, Dropdown, Table } from 'react-bootstrap';

// type
// import { ProjectDetail } from './types';
import { PODetail } from './types';

// components
import PODetailModal from '../../uikit/Modals/PODetailModal';

type POProps = {
    PODetails: PODetail[];
};

const POTable = ({ PODetails }: POProps) => {
    return (
        <Card>
            <Card.Body>
                {/* <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

                <h4 className="header-title mt-0 mb-3">PO | ใบสั่งซื้อรออนุมัติ</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>เลขที่เอกสาร</th>
                            <th>แผนกที่ขอซื้อ</th>
                            <th>ราคาสุทธิ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(PODetails || []).map((PODetail, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>
                                        <PODetailModal />
                                    </td>
                                    <td>{PODetail.id}</td>
                                    <td>{PODetail.department}</td>
                                    <td>{PODetail.price}</td>
                                    {/* <td>{projectDetail.dueDate}</td>
                                    <td>
                                        <Badge bg={projectDetail.variant}>{projectDetail.status}</Badge>
                                    </td>
                                    <td>{projectDetail.clients}</td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default POTable;
