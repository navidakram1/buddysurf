import React from 'react';
import { Box } from '@mui/material';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Box sx={{ height: 'calc(100vh - 64px)' }}>
      <GoogleMap
        zoom={14}
        center={{ lat: 0, lng: 0 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default MapView;
