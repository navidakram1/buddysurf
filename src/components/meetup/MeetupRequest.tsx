import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';

interface MeetupRequestProps {
  user: {
    name: string;
    age: number;
    imageUrl: string;
  };
  location: string;
  time: string;
  onAccept: () => void;
  onDecline: () => void;
}

const MeetupRequest = ({ user, location, time, onAccept, onDecline }: MeetupRequestProps) => {
  return (
    <Card sx={{ maxWidth: 400, m: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Meetup Request from {user.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOn sx={{ mr: 1 }} />
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography variant="body1">{time}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="large" color="primary" onClick={onAccept}>Accept</Button>
        <Button size="large" color="error" onClick={onDecline}>Decline</Button>
      </CardActions>
    </Card>
  );
};

export default MeetupRequest;
