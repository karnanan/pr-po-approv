'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import Prtable from '@/app/(DashboardLayout)/components/dashboard/Prtable'
import Potable from '@/app/(DashboardLayout)/components/dashboard/Potable'
import FilterForm from './components/forms/FilterForm';



const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          
          <FilterForm/>
        </Grid>
          <Grid item xs={12} lg={12}>
          
            <Prtable/>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Potable/>
          </Grid>

        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
