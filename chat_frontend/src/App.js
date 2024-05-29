import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <Container maxWidth="md" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={20}>
          <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
            {isLoggedIn ? (
              <Chat />
            ) : (
              showLogin ? (
                <Login setIsLoggedIn={setIsLoggedIn} onRegisterClick={handleRegisterClick} />
              ) : (
                <Register onLoginClick={handleLoginClick} />
              )
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
