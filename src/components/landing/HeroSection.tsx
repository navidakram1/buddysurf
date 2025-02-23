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
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              The app connects users in real-time using location-based matching
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Enabling spontaneous meetups for social, professional, or hobby-based activities. Find your next coffee buddy, gym partner, or networking connection instantly!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#2196F3',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                }}
                onClick={() => router.push('/auth/register')}
              >
                Start Meeting People
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
                  px: 4,
                  py: 1.5,
                }}
                onClick={() => router.push('/auth/login')}
              >
                Sign In
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Security sx={{ mr: 1 }} />
                <Typography variant="body1">Verified Users</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <GroupAdd sx={{ mr: 1 }} />
                <Typography variant="body1">Instant Matching</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ExploreOutlined sx={{ mr: 1 }} />
                <Typography variant="body1">Location Based</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                },
              }}
            >
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
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
