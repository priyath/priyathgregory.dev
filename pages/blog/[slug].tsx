import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Container, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader/BlogPostHeader';
import { NextSeo } from 'next-seo';
import Comment from '../../components/Comment';

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

interface IBlogProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}
export default function Blog({ mdxSource, frontMatter }: IBlogProps) {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | Priyath Gregory`}
        description={`${frontMatter.summary}`}
        openGraph={{
          title: `${frontMatter.title} | Priyath Gregory`,
          description: `${frontMatter.summary}`,
          url: frontMatter.shareUrl,
          type: 'article',
          images: [
            {
              url: `/${frontMatter.coverImage}`,
              width: 850,
              height: 650,
              alt: `${frontMatter.title} cover image`,
            },
          ],
        }}
      />
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
          <Divider
            sx={{
              marginBottom: {
                lg: 8,
                xs: 6,
              },
              color: 'primary.main',
              width: '100%',
              marginX: 'auto',
            }}
          />
          <Comment />
          <Divider
            sx={{
              marginBottom: {
                lg: 8,
                xs: 6,
              },
              color: 'primary.main',
              width: '100%',
              marginX: 'auto',
            }}
          />
        </Box>
      </Container>
    </>
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
