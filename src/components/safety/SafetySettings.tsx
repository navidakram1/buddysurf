import React from 'react';
import { Box, Switch, FormGroup, FormControlLabel, TextField, Button, Typography } from '@mui/material';
import { Security, ContactPhone, Block } from '@mui/icons-material';

const SafetySettings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Security sx={{ mr: 1 }} /> Privacy Settings
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Show my location to other users"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Allow meetup requests"
          />
          <FormControlLabel
            control={<Switch />}
            label="Hide my age"
          />
        </FormGroup>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ContactPhone sx={{ mr: 1 }} /> Emergency Contact
        </Typography>
        <TextField
          fullWidth
          label="Contact Name"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Contact Phone"
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Emergency Contact
        </Button>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Block sx={{ mr: 1 }} /> Blocked Users
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No blocked users
        </Typography>
      </Box>
    </Box>
  );
};

export default SafetySettings;
