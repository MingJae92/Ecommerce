import React from 'react';
import { Grid } from '@mui/material';

function Homepage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '10vh' }}
    >
      <Grid item>
        <h1>Mings SUPER STORE!!!</h1>
      </Grid>
    </Grid>
  );
}

export default Homepage;
