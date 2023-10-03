import React, { useReducer } from 'react';
import { TextField, Button, Container, Typography, CssBaseline, Paper, Box } from '@mui/material';

const reducer = (state, action) => {
  switch (action.type) {
    case "Text change":
      return { ...state, ...action.payload }; // Spread the existing state and apply changes
    default:
      return state;
  }
};

const Register = () => {
  // Define formInfo before using it in useReducer
  const formInfo = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  // Use formInfo as the initial state in useReducer
  const [userInfo, dispatch] = useReducer(reducer, formInfo);

  const handleChange = (e) => {
    // Create an object with the updated field value and dispatch it
    dispatch({
      type: "Text change",
      payload: { [e.target.name]: e.target.value }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can access the form data in userInfo for further processing if needed
    console.log(userInfo);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="userName"
            value={userInfo.userName}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            type="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handleChange}
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;

