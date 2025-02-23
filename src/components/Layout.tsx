import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'BuddySurf' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="BuddySurf - Connect with people, share adventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box component="main">
        {children}
      </Box>
    </>
  );
};

export default Layout;
