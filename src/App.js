import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomeScreen from './screen/HomeScreen';
import ResultScreen from './screen/ResultScreen';

const theme = createTheme({
  palette: {
    primary: {
      light: '#539fdc',
      main: '#0071aa',
      dark: '#00467a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f9f9f9',
      dark: '#c6c6c6',
      contrastText: '#000000',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </ThemeProvider>
  )
};

export default App;