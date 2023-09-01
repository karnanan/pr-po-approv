import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component

import PRTable from './PRTable';
import POTable from './POTable';

// dummy data
import { PRDetails } from './data';
import { PODetails } from './data';

const DashBoard1 = () => {
    // set pagetitle
    usePageTitle({
        title: 'DashBoard',
        breadCrumbItems: [
            {
                path: '/dashboard',
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
            <Row>
                <POTable PODetails={PODetails} />
            </Row>
        </>
    );
};

export default DashBoard1;
