import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { getAllFilesFrontMatter } from '../../lib/getContent';
import BlogHome from '../../components/BlogHome';

export interface IFrontMatter {
  publishedAt: string;
  readingTime: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
  slug: string;
  summary: string;
  title: string;
  wordCount: number;
  coverImage: string;
  shareUrl: string;
}

export default function BlogPage({ posts, tags, categories }: any) {
  return (
    <>
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
            <BlogHome posts={posts} tags={tags} categories={categories} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const { posts, tags, categories } = await getAllFilesFrontMatter('blog');
  return { props: { posts, tags, categories } };
};
