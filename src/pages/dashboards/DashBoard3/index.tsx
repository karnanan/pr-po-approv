import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component

import POTable from './POTable';

// dummy data

import { PODetails } from './data';

const DashBoard3 = () => {
    // set pagetitle
    usePageTitle({
        title: 'DashBoard',
        breadCrumbItems: [
            {
                path: '/dashboard3',
                label: 'DashBoard',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <POTable PODetails={PODetails} />
            </Row>
        </>
    );
};

export default DashBoard3;
