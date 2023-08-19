import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
}));

function AboutUs() {
  return (
    <RootContainer maxWidth="md">
      <Paper elevation={3}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company, where innovation meets excellence! We are a team of passionate individuals
          dedicated to creating high-quality products that cater to your needs. Our mission is to make your life
          easier and more enjoyable by delivering top-notch solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          With years of experience and a commitment to staying at the forefront of technology, we take pride in
          offering a wide range of services that include web development, mobile app development, and much more.
        </Typography>
        <Typography variant="body1" paragraph>
          Our dedicated team of experts is always striving to exceed expectations and provide outstanding results.
          We believe in building strong relationships with our clients and maintaining transparency every step of
          the way.
        </Typography>
        <Typography variant="body1">
          Thank you for considering us for your projects. We look forward to working with you and helping you achieve
          your goals!
        </Typography>
      </Paper>
    </RootContainer>
  );
}

export default AboutUs;
