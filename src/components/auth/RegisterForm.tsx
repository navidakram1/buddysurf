import React from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';

const RegisterForm = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField required fullWidth margin="normal" name="name" label="Full Name" autoComplete="name" />
          <TextField required fullWidth margin="normal" name="email" label="Email Address" autoComplete="email" />
          <TextField required fullWidth margin="normal" name="password" label="Password" type="password" />
          <TextField required fullWidth margin="normal" name="age" label="Age" type="number" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
