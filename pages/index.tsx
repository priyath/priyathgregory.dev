import type { NextPage } from 'next';
import * as React from 'react';
import AboutWrapper from '../components/About';
import CssBaseline from '@mui/material/CssBaseline';
import Shell from '../components/Shell';
import { Box, Grid } from '@mui/material';
import { getAllFilesFrontMatter } from '../lib/getContent';

const Home: NextPage = ({ posts }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '900px',
        paddingX: {
          xs: 0,
          lg: 2,
        },
        margin: {
          lg: 'auto',
          md: '0 10%',
          xs: '0 5%',
        },
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} py={{ xs: 2, md: 4 }} px={{ xs: 0, md: 4 }}>
          <Shell />
        </Grid>
        <Grid item xs={12} py={{ xs: 2, md: 4 }} px={{ xs: 0, md: 4 }}>
          <AboutWrapper posts={posts} />
        </Grid>
      </Grid>
    </Box>
  );
};

export const getStaticProps = async () => {
  const { posts } = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
};

export default Home;
