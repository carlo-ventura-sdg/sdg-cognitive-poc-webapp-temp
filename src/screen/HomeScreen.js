import React from 'react';
import { Stack, Box } from '@mui/material';

import SearchBar from '../components/SearchBar';
import Logo from '../assets/images/Logo.png';

const HomeScreen = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ minHeight: '80vh' }}
    >
      <Box
        component="img"
        sx={{
          maxHeight: { xl: 400, lg: 320, md: 256, sm: 200, xs: 160 },
          maxWidth: { xl: 300, lg: 240, md: 192, sm: 150, xs: 120 },
          color: "transparent"
        }}
        alt="Logo"
        src={Logo}
      />
      <Box sx={{ width:'60%' }}>
        <SearchBar />
      </Box>
    </Stack >
  )
}

export default HomeScreen