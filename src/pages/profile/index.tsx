import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Layout from '@/components/Layout';
import ProfileCard from '@/components/profile/ProfileCard';
import PointsDashboard from '@/components/rewards/PointsDashboard';
import SafetySettings from '@/components/safety/SafetySettings';

const ProfilePage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProfileCard
              name="John Doe"
              age={25}
              interests={['Surfing', 'Coffee', 'Photography']}
              imageUrl="/sample-profile.jpg"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <PointsDashboard />
            </Paper>
            <Paper sx={{ p: 2 }}>
              <SafetySettings />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProfilePage;
