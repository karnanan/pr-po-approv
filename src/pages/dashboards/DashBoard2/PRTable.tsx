import { Badge, Card, Dropdown, Table } from 'react-bootstrap';

// type
// import { ProjectDetail } from './types';
import { PRDetail } from './types';

type PRProps = {
    PRDetails: PRDetail[];
};

const PRTable = ({ PRDetails }: PRProps) => {
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

                <h4 className="header-title mt-0 mb-3">รายการใบเสนอซื้อ(PR) | Today</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>เลขที่เอกสาร</th>
                            <th>แผนกที่ขอซื้อ</th>
                            <th>ราคาสุทธิ</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(PRDetails || []).map((PRDetail, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{PRDetail.id}</td>
                                    <td>{PRDetail.department}</td>
                                    <td>{PRDetail.price}</td>
                                    <td>
                                        <Badge bg={PRDetail.variant}>{PRDetail.status}</Badge>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default PRTable;
