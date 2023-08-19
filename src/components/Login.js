import React from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography
} from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledPaper = styled(Paper)({
  padding: '1rem',
  maxWidth: 400,
});

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
});

const Login = () => {
  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Log in to Your Account
        </Typography>
        <form>
          <StyledTextField
            label="Username"
            variant="outlined"
            fullWidth
          />
          <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <StyledButton
            variant="contained"
            color="primary"
            fullWidth
          >
            Log In
          </StyledButton>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Login;
