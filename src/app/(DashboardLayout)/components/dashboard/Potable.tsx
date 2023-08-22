
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

const PurchaseOrder = [
    {
        id: "660821001",
        division: "Elite Admin",
        price: "10,000",
        status: "WaitApprove",
        pbg: "error.main",
    },
    {
        id: "660821002",
        division: "Elite Admin",
        price: "20,000",
        status: "WaitApprove",
        pbg: "error.main",
        
    },
    {
        id: "660821003",
        division: "Elite Admin",
        price: "30,000",
        status: "WaitApprove",
        pbg: "error.main",
        
    },
    {
        id: "660821004",
        division: "Elite Admin",
        price: "40,000",
        status: "Approve",
        pbg: "success.main",
        
    },
    {
        id: "660821005",
        division: "Elite Admin",
        price: "50,000",
        status: "Approve",
        pbg: "success.main",
        
    },
];


const PurchaseOrderTable = () => {
    return (

        <DashboardCard title="ใบสั่งซื้อ (Purchase Order)">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    PR No.
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                Division
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Price
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {PurchaseOrder.map((PurchaseOrder) => (
                            <TableRow key={PurchaseOrder.division}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {PurchaseOrder.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {PurchaseOrder.division}
                                            </Typography>
                                            
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">{PurchaseOrder.price}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: PurchaseOrder.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={PurchaseOrder.status}
                                    ></Chip>
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default PurchaseOrderTable;
