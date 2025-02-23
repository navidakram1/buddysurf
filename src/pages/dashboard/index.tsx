import React from 'react';
import { Grid } from '@mui/material';
import Layout from '@/components/Layout';
import MapView from '@/components/map/MapView';
import ProfileCard from '@/components/profile/ProfileCard';

const DashboardPage = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <MapView />
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          {/* Sample profile cards - will be populated from backend */}
          <ProfileCard
            name="John Doe"
            age={25}
            interests={['Surfing', 'Coffee', 'Photography']}
            imageUrl="/sample-profile.jpg"
            distance="2km"
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
