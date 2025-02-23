import { Box, Button, Container, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Connect with People,
                <br />
                Share Adventures
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                }}
              >
                Find and meet new friends instantly based on shared interests and location.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.png"
                alt="People connecting"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Why Choose BuddySurf?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard
                icon={<PeopleIcon />}
                title="Instant Connections"
                description="Connect with like-minded people in your area instantly based on shared interests."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard
                icon={<LocationOnIcon />}
                title="Location-Based"
                description="Find people nearby who are ready to meet and share experiences."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard
                icon={<SecurityIcon />}
                title="Safe & Secure"
                description="Verified profiles and safety features to ensure secure meetups."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FeatureCard
                icon={<EmojiEventsIcon />}
                title="Gamification"
                description="Earn points and badges as you meet new people and create memories."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ mb: 3 }}
          >
            Ready to Start Your Adventure?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Join thousands of people making new connections every day.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Sign Up Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
