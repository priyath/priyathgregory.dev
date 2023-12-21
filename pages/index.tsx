import type { NextPage } from 'next';
import * as React from 'react';
import AboutWrapper from '../components/About';
import CssBaseline from '@mui/material/CssBaseline';
import Shell from '../components/Shell';
import { Box, Grid } from '@mui/material';
import { getAllFilesFrontMatter } from '../lib/getContent';
import Typography from '@mui/material/Typography';

const Home: NextPage = ({ posts }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: 'lg',
        paddingX: {
          xs: 0,
          lg: 4,
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
        <Grid item xs={12}>
          <Shell />
        </Grid>
        <Grid item xs={12}>
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
