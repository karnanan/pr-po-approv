import { Badge, Card, Table } from 'react-bootstrap';

// type
// import { ProjectDetail } from './types';
import { PRDetail } from './types';

// components
import PRDetailModal from '../../uikit/Modals/PRDetailModal';

type PRProps = {
    PRDetails: PRDetail[];
};

const PRTable = ({ PRDetails }: PRProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">PR | ใบเสนอซื้อรออนุมัติ</h4>

                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
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
                                    <td>
                                        <PRDetailModal />
                                    </td>
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
