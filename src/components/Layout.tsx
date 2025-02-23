import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'BuddySurf' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="BuddySurf - Instant Meetup App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BuddySurf
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
