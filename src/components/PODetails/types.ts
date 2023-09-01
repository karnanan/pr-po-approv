type POItem = {
    id: number;
    name: string;
    quantity: number;
    unit_cost: string;
    total: string;
};

export type POItems = {
    po_id?: number;
    po_date?: string;
    po_department?: string;
    po_status?: string;
    preapprove_name?: string;
    items: POItem[];
    sub_total?: number;
    discount?: number;
    vat?: number;
    total?: number;
};
