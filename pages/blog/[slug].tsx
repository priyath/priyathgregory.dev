import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader/BlogPostHeader';

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
}

interface IBlogProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}
export default function Blog({ mdxSource, frontMatter }: IBlogProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        px: {
          md: 8,
          sm: 4,
          xs: 3,
        },
      }}
    >
      <CssBaseline />
      <Shell />
      <Box
        sx={{
          margin: 'auto',
          marginTop: { md: 0, xs: '56px' },
          maxWidth: '820px',
        }}
      >
        <BlogPostHeader frontMatter={frontMatter} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Container>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
