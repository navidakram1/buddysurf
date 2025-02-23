import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { ExploreOutlined, GroupAdd, Security, EmojiPeople } from '@mui/icons-material';

const features = [
  {
    icon: <ExploreOutlined sx={{ fontSize: 40 }} />,
    title: 'Real-Time Location',
    description: 'Find people nearby instantly with our live location tracking system.',
  },
  {
    icon: <GroupAdd sx={{ fontSize: 40 }} />,
    title: 'Instant Meetups',
    description: 'Connect with people who share your interests and meet up right away.',
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Safe & Secure',
    description: 'Verified profiles and safety features to ensure secure meetups.',
  },
  {
    icon: <EmojiPeople sx={{ fontSize: 40 }} />,
    title: 'Activity Based',
    description: 'Find companions for sports, coffee, networking, or any activity.',
  },
];

const FeatureSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why Choose BuddySurf?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    opacity: 0.8,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection;
