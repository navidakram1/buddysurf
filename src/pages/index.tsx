import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  return (
    <Layout>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to BuddySurf
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Find and meet new friends instantly!
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Your Location
                </Typography>
                {location ? (
                  <Typography>
                    Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
                  </Typography>
                ) : (
                  <Typography>Getting your location...</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Nearby Buddies
                </Typography>
                <Typography>
                  Enable location to see buddies near you!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => alert('Coming soon!')}
                >
                  Find Buddies
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
