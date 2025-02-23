import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';

interface ProfileCardProps {
  name: string;
  age: number;
  interests: string[];
  imageUrl: string;
  distance?: string;
}

const ProfileCard = ({ name, age, interests, imageUrl, distance }: ProfileCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}, {age}
        </Typography>
        {distance && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {distance} away
          </Typography>
        )}
        <Box sx={{ mt: 1 }}>
          {interests.map((interest, index) => (
            <Chip key={index} label={interest} sx={{ mr: 0.5, mb: 0.5 }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
