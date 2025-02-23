import React from 'react';
import { Container } from '@mui/material';
import LoginForm from '@/components/auth/LoginForm';
import Layout from '@/components/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default LoginPage;
