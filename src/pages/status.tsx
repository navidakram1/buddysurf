import { Box, Card, CardContent, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

const Status: NextPage = () => {
  const [status, setStatus] = useState<{
    status: string;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((error) => console.error('Error fetching status:', error));
  }, []);

  return (
    <Layout title="BuddySurf - Status">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          System Status
        </Typography>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              API Status
            </Typography>
            {status ? (
              <>
                <Typography color="success.main" gutterBottom>
                  Status: {status.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Last checked: {new Date(status.timestamp).toLocaleString()}
                </Typography>
              </>
            ) : (
              <Typography color="text.secondary">
                Checking status...
              </Typography>
            )}
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Deployment Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Environment: {process.env.NODE_ENV}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: europe-north1
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default Status;
