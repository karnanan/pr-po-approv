import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component

import PRTable from './PRTable';

// dummy data
import { PRDetails } from './data';

const DashBoard2 = () => {
    // set pagetitle
    usePageTitle({
        title: 'DashBoard',
        breadCrumbItems: [
            {
                path: '/dashboard2',
                label: 'DashBoard',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <PRTable PRDetails={PRDetails} />
            </Row>
        </>
    );
};

export default DashBoard2;
