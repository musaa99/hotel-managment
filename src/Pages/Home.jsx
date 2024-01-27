import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box>
          <h1>Hotel Management App</h1>
          <Typography> Welcome to Musa's hotel ranking</Typography>
        </Box>
    </Container>
    </div>
  )
}

export default Home;