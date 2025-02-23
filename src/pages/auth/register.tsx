import React from 'react';
import { Container } from '@mui/material';
import RegisterForm from '@/components/auth/RegisterForm';
import Layout from '@/components/Layout';

const RegisterPage = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <RegisterForm />
      </Container>
    </Layout>
  );
};

export default RegisterPage;
