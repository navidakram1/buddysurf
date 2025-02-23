import React, { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Typography, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';
import { MyLocation, NearMe, People } from '@mui/icons-material';
import PlacesAutocomplete from './PlacesAutocomplete';

interface Location {
  lat: number;
  lng: number;
}

// Initial world view coordinates and zoom level
const INITIAL_CENTER = { lat: 20, lng: 0 };
const INITIAL_ZOOM = 2;
const LOCATION_ZOOM = 15;

const LiveLocationMap = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Location | null>(null);
  const [nearbyUsers, setNearbyUsers] = useState<Location[]>([]);
  const [searchRadius, setSearchRadius] = useState(1000); // 1km radius
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const smoothPanTo = useCallback((location: Location, zoom: number) => {
    if (!map) return;

    // First zoom out slightly for a better animation effect
    if (!initialLoad) {
      map.setZoom(map.getZoom()! - 2);
    }

    // Animate to the new location
    map.panTo(location);

    // After panning, smoothly zoom in
    setTimeout(() => {
      if (map) {
        map.setZoom(zoom);
      }
    }, initialLoad ? 2000 : 300);
  }, [map, initialLoad]);

  useEffect(() => {
    if (map && initialLoad) {
      // Start with world view
      map.setCenter(INITIAL_CENTER);
      map.setZoom(INITIAL_ZOOM);
      setInitialLoad(false);

      // Get user's location after showing world map
      setIsLocating(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setUserLocation(newLocation);
            
            // Smoothly animate to user's location
            setTimeout(() => {
              smoothPanTo(newLocation, LOCATION_ZOOM);
              setIsLocating(false);
            }, 1500); // Wait 1.5s before starting animation

            // Sample nearby users
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
            setIsLocating(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      }
    }
  }, [map, smoothPanTo, initialLoad]);

  const handlePlaceSelect = useCallback((place: google.maps.places.PlaceResult) => {
    if (place.geometry?.location && map) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedPlace(location);
      smoothPanTo(location, 16);
    }
  }, [map, smoothPanTo]);

  const handleLocationSelect = useCallback((location: Location) => {
    if (map) {
      setSelectedPlace(location);
      smoothPanTo(location, 16);
    }
  }, [map, smoothPanTo]);

  const handleCenterMap = () => {
    if (userLocation && map) {
      smoothPanTo(userLocation, LOCATION_ZOOM);
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
        zoom={INITIAL_ZOOM}
        center={INITIAL_CENTER}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          minZoom: 2,
          restriction: {
            latLngBounds: {
              north: 85,
              south: -85,
              west: -180,
              east: 180,
            },
            strictBounds: true,
          },
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
            {isLocating ? <CircularProgress size={24} /> : <MyLocation />}
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
