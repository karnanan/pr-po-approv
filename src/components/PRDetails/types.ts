type PRItem = {
    id: number;
    name: string;
    quantity: number;
    unit_cost: string;
    total: string;
};

export type PRItems = {
    pr_id?: number;
    pr_date?: string;
    pr_department?: string;
    pr_status?: string;
    preapprove_name?: string;
    items: PRItem[];
    sub_total?: number;
    discount?: number;
    vat?: number;
    total?: number;
};
