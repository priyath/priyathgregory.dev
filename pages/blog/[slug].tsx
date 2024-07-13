import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import Shell from '../../components/Shell';
import * as React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader/BlogPostHeader';
import { NextSeo } from 'next-seo';
import Comment from '../../components/Comment';
import BlogSidePanel from '../../components/BlogHome/BlogSidePanel';

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
  category: {
    key: string;
    label: string;
  };
}

interface IBlogProps {
  post: {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: IFrontMatter;
  };
  posts: any;
  tags?: string[];
  tag?: string;
  category?: string;
  categories: { [key: string]: { count: number; label: string } };
}
export default function Blog(props: IBlogProps) {
  const { post, posts, tags, categories } = props;
  const { mdxSource, frontMatter } = post;

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
          <Grid item xs={12} px={{ xs: 0, md: 4 }} py={{ xs: 2, md: 4 }}>
            <Shell />
          </Grid>
          <Grid item xs={12} px={{ xs: 0, md: 4 }} py={{ xs: 2, md: 4 }}>
            <Box
              sx={{
                margin: 'auto',
                padding: 0,
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
          </Grid>
          {/*<Grid item xs={1}></Grid>*/}
          {/*<Grid item xs={12} md={3}>*/}
          {/*  <BlogSidePanel*/}
          {/*    posts={posts}*/}
          {/*    tags={tags}*/}
          {/*    relatedTags={post.frontMatter.tags}*/}
          {/*    categories={categories}*/}
          {/*    category={post.frontMatter.category.key}*/}
          {/*  />*/}
          {/*</Grid>*/}
        </Grid>
      </Box>
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
  const { posts, tags, categories } = await getAllFilesFrontMatter('blog');

  return { props: { post, posts, tags, categories } };
}
