import { getAllFilesFrontMatter } from '../../lib/getContent';
import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
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
  tags: string[];
}

export default function Category({
  posts,
  tag,
  tags,
  category,
  categories,
}: any) {
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
            <BlogHome
              posts={posts}
              tag={tag}
              category={category}
              tags={tags}
              categories={categories}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const { categories } = await getAllFilesFrontMatter('blog');

  return {
    paths: Object.keys(categories || {}).map((category) => ({
      params: {
        category: category,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { posts, tags, categories } = await getAllFilesFrontMatter(
    'blog',
    undefined,
    params.category
  );

  return { props: { posts, category: params.category, tags, categories } };
}
