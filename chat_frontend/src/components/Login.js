import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box, Link } from '@mui/material';
import axios from 'axios';

const Login = ({ setIsLoggedIn, onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/login/', { username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid username or password');
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          {error && <Typography variant="body2" color="error" style={{ marginBottom: '1rem', textAlign: 'center' }}>{error}</Typography>}
          <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginBottom: '1rem' }}>
            Login
          </Button>
          <Typography variant="body2" style={{ textAlign: 'center' }}>
            Don't have an account? <Link href="#" onClick={onRegisterClick} style={{ color: '#007bff', textDecoration: 'none' }}>Register here</Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
