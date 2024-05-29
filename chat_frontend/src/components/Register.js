import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box, Link } from '@mui/material';
import axios from 'axios';

const Register = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/register/', { username, password });
      console.log(res.data);
    } catch (error) {
      setError('Username already exists');
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          Register
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
            Register
          </Button>
          <Typography variant="body2" style={{ textAlign: 'center' }}>
            Already have an account? <Link href="#" onClick={onLoginClick} style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}

export default Register;
