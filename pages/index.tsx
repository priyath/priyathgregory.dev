import type { NextPage } from 'next';
import * as React from 'react';
import AboutWrapper from '../components/About';
import CssBaseline from '@mui/material/CssBaseline';
import Shell from '../components/Shell';
import { Box } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Shell />
      <AboutWrapper />
    </Box>
  );
};

export default Home;
