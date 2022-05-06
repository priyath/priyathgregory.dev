import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AboutWrapper from '../../components/About';
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
    <Container sx={{ display: 'flex' }} fixed>
      <CssBaseline />
      <Shell />
      <Box
        sx={{
          margin: 'auto',
          marginTop: { md: 0, xs: '56px' },
          textAlign: 'center',
        }}
      >
        <BlogPostHeader frontMatter={frontMatter} />
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
