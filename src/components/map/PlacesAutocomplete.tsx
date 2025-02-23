import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, InputBase, IconButton } from '@mui/material';
import { Search, MyLocation } from '@mui/icons-material';
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
  lat: number;
  lng: number;
}

interface PlacesAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult) => void;
  onLocationSelect: (location: Location) => void;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  onPlaceSelect,
  onLocationSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then(() => {
      if (inputRef.current) {
        autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
          types: ['establishment', 'geocode'],
          fields: ['formatted_address', 'geometry', 'name', 'place_id'],
        });

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (place && place.geometry && place.geometry.location) {
            onPlaceSelect(place);
          }
        });

        setIsLoaded(true);
      }
    });
  }, [onPlaceSelect]);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          onLocationSelect(location);

          // Reverse geocode to get address
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location }, (results, status) => {
            if (status === 'OK' && results?.[0] && inputRef.current) {
              inputRef.current.value = results[0].formatted_address;
            }
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        position: 'absolute',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        boxShadow: 3,
      }}
    >
      <InputBase
        inputRef={inputRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search location or address"
        inputProps={{ 'aria-label': 'search location' }}
      />
      <IconButton onClick={handleGetCurrentLocation} sx={{ p: '10px' }}>
        <MyLocation />
      </IconButton>
      <IconButton type="button" sx={{ p: '10px' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default PlacesAutocomplete;
