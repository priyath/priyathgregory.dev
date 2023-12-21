import { getAllFilesFrontMatter, getAllTags } from '../../lib/getContent';
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

export default function Tag({ posts, tag, tags, categories }: any) {
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
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { posts, tags, categories } = await getAllFilesFrontMatter(
    'blog',
    params.tag
  );

  return { props: { posts, tag: params.tag, tags, categories } };
}
