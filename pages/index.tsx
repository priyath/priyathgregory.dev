import type { NextPage } from 'next';
import * as React from 'react';
import HomeWrapper from '../components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import { getAllFilesFrontMatter } from '../lib/getContent';
import Shell from '../components/Shell';
import Toolbar from '@mui/material/Toolbar';

const Home: NextPage = ({ posts }: any) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Shell />
      <Container>
        <HomeWrapper posts={posts} />
      </Container>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
};

export default Home;
