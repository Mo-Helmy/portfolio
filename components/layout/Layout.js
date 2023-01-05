import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
