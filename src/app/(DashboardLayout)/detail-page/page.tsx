'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const DetailPage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>This is a PR-PO detail</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default DetailPage;

