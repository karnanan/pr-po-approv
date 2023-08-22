import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Box, Grid, TextField, Button } from '@mui/material';


type Props = {}

export default function FilterForm({}: Props) {
  return (
    <DashboardCard title='ค้นหา'>
        <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9}>
        <TextField
          label="User Request"
          id="user-reg"
          defaultValue=""
          size="small"
        />
        
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="center" xs={3}>
        <Button variant="contained">
          ค้นหา
        </Button>
        </Grid>
        <Grid item xs={6}>
          3
        </Grid>
        <Grid item xs={6}>
          4
        </Grid>
      </Grid>
        </Box>
    </DashboardCard>
  )
}