import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn] = useState(false);

  return (
    <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            BUDDYSURF
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit">How It Works</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Safety</Button>
            {isLoggedIn ? (
              <IconButton color="primary">
                <PersonIcon />
              </IconButton>
            ) : (
              <>
                <Button variant="outlined" color="primary">Login</Button>
                <Button variant="contained" color="primary">Sign Up</Button>
              </>
            )}
          </Box>

          <IconButton
            size="large"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
