// types
import { PRItems } from './types';

const PRItemDetails: PRItems = {
    pr_id: 66080001,
    pr_date: '01/08/2566',
    pr_department:'แผนกเทคโนโลยีสารสนเทศ',
    pr_status: 'ขออนุมัติใบเสนอซื้อ',
    preapprove_name: 'นางสาวใจดี ดีใจ',
    
    items: [
        {
            id: 1,
            name: 'LCD',
            quantity: 1,
            unit_cost: '$380',
            total: '$380',
        },
        {
            id: 2,
            name: 'Mobile',
            quantity: 5,
            unit_cost: '$50',
            total: '$250',
        },
        {
            id: 3,
            name: 'LED',
            quantity: 2,
            unit_cost: '$500',
            total: '$1000',
        },
        {
            id: 4,
            name: 'LCD',
            quantity: 3,
            unit_cost: '$300',
            total: '$900',
        },
        {
            id: 5,
            name: 'Mobile',
            quantity: 5,
            unit_cost: '$80',
            total: '$400',
        },
    ],
    sub_total: 2930.0,
    discount: 12.9,
    vat: 12.9,
    total: 2930.0,
};

export { PRItemDetails };
