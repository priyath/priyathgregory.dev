import type { NextPage } from 'next';
import * as React from 'react';
import AboutWrapper from '../components/About';
import CssBaseline from '@mui/material/CssBaseline';
import Shell from '../components/Shell';
import { Box } from '@mui/material';
import { getAllFilesFrontMatter } from '../lib/getContent';

const Home: NextPage = ({ posts }: any) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CssBaseline />
      <AboutWrapper posts={posts} />
    </Box>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
};

export default Home;
