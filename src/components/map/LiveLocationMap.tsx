import React, { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';
import { MyLocation, NearMe, People } from '@mui/icons-material';
import PlacesAutocomplete from './PlacesAutocomplete';

interface Location {
  lat: number;
  lng: number;
}

const LiveLocationMap = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Location | null>(null);
  const [nearbyUsers, setNearbyUsers] = useState<Location[]>([]);
  const [searchRadius, setSearchRadius] = useState(1000); // 1km radius
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const handlePlaceSelect = useCallback((place: google.maps.places.PlaceResult) => {
    if (place.geometry?.location && map) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedPlace(location);
      map.panTo(location);
      map.setZoom(16);
    }
  }, [map]);

  const handleLocationSelect = useCallback((location: Location) => {
    if (map) {
      setSelectedPlace(location);
      map.panTo(location);
      map.setZoom(16);
    }
  }, [map]);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(newLocation);
          
          // In a real app, we would fetch nearby users from the backend here
          // For demo, we'll add some sample nearby users
          const sampleNearbyUsers = [
            {
              lat: position.coords.latitude + 0.002,
              lng: position.coords.longitude + 0.002,
            },
            {
              lat: position.coords.latitude - 0.001,
              lng: position.coords.longitude + 0.001,
            },
          ];
          setNearbyUsers(sampleNearbyUsers);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  const handleCenterMap = () => {
    if (userLocation && map) {
      map.panTo(userLocation);
      map.setZoom(15);
    }
  };

  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <Box sx={{ position: 'relative', height: '100%', minHeight: 400 }}>
      <PlacesAutocomplete
        onPlaceSelect={handlePlaceSelect}
        onLocationSelect={handleLocationSelect}
      />
      
      <GoogleMap
        zoom={15}
        center={userLocation || { lat: 0, lng: 0 }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {userLocation && (
          <>
            <Marker
              position={userLocation}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#2196F3',
                fillOpacity: 1,
                strokeColor: 'white',
                strokeWeight: 2,
              }}
            />
            <Circle
              center={userLocation}
              radius={searchRadius}
              options={{
                fillColor: '#2196F3',
                fillOpacity: 0.1,
                strokeColor: '#2196F3',
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          </>
        )}

        {selectedPlace && (
          <Marker
            position={selectedPlace}
            icon={{
              path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: 6,
              fillColor: '#FF5722',
              fillOpacity: 1,
              strokeColor: 'white',
              strokeWeight: 2,
            }}
          />
        )}

        {nearbyUsers.map((location, index) => (
          <Marker
            key={index}
            position={location}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#4CAF50',
              fillOpacity: 1,
              strokeColor: 'white',
              strokeWeight: 2,
            }}
          />
        ))}
      </GoogleMap>

      <Paper
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          p: 1,
          display: 'flex',
          gap: 1,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Tooltip title="Center on my location">
          <IconButton onClick={handleCenterMap} color="primary">
            <MyLocation />
          </IconButton>
        </Tooltip>
        <Tooltip title="Nearby users">
          <IconButton color="primary">
            <People />
          </IconButton>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default LiveLocationMap;
