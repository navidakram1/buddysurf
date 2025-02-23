import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Layout from '@/components/Layout';
import ChatRoom from '@/components/chat/ChatRoom';
import MeetupRequest from '@/components/meetup/MeetupRequest';
import { useRouter } from 'next/router';

const MeetupPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MeetupRequest
              user={{
                name: "Jane Doe",
                age: 24,
                imageUrl: "/sample-profile.jpg"
              }}
              location="Central Park Coffee"
              time="2:30 PM"
              onAccept={() => console.log('Accepted')}
              onDecline={() => console.log('Declined')}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ height: 'calc(100vh - 200px)' }}>
              <ChatRoom />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default MeetupPage;
