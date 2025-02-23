import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Grid } from '@mui/material';
import { Star, EmojiEvents } from '@mui/icons-material';

interface Badge {
  id: string;
  name: string;
  description: string;
  earned: boolean;
}

const PointsDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Star color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Points Balance</Typography>
              </Box>
              <Typography variant="h3" color="primary">1,250</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Next Level: 2,000 points
                </Typography>
                <LinearProgress variant="determinate" value={62.5} sx={{ mt: 1 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Leaderboard Position</Typography>
              </Box>
              <Typography variant="h3" color="primary">#42</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Top 10% of all users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsDashboard;
