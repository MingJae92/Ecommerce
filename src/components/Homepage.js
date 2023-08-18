import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


function Homepage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: 4 }}>
        Welcome to Mings Super Store!!!
      </Typography>
      <Typography variant="h5" align="center" sx={{ marginBottom: 4 }}>
        Discover amazing products at great prices!
      </Typography>
     
    </Container>
  );
}

export default Homepage;
