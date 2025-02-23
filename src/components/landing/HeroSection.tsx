import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ExploreOutlined, GroupAdd, Security } from '@mui/icons-material';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Connect Instantly, Meet Safely
            </Typography>
            <Typography variant="h5" paragraph>
              Find and meet people nearby who share your interests. Real-time meetups made easy and safe.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#2196F3',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
                mr: 2,
              }}
              onClick={() => router.push('/auth/register')}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: '#f5f5f5',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
              onClick={() => router.push('/auth/login')}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/hero-image.svg"
              alt="BuddySurf Hero"
              sx={{
                width: '100%',
                maxWidth: 500,
                height: 'auto',
                display: 'block',
                margin: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
