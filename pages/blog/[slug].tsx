import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';
import Shell from '../../components/Shell';
import * as React from 'react';
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BlogPostHeader from '../../components/BlogPostHeader/BlogPostHeader';
import { NextSeo } from 'next-seo';
import Comment from '../../components/Comment';
import AboutWrapper from '../../components/About';
import Typography from '@mui/material/Typography';

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
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} mb={3}>
                <Box>
                  <Typography
                    variant={'h6'}
                    sx={{
                      color: 'text.secondary',
                      lineHeight: '54px',
                    }}
                  >
                    Categories
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    color: 'primary.main',
                    width: '100%',
                    marginX: 'auto',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <List sx={{ paddingTop: 0 }}>
                  {['Javascript', 'NOSQL', 'GCP', 'Snippets'].map(
                    (item, index) => {
                      return (
                        <Grid container>
                          <Grid item xs={10}>
                            <ListItem
                              key={index}
                              sx={{
                                padding: 0.2,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingTop: 0,
                              }}
                            >
                              <ListItemText primary={item} />
                            </ListItem>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography variant={'body1'}>2</Typography>
                          </Grid>
                        </Grid>
                      );
                    }
                  )}
                </List>
              </Grid>
            </Grid>
          </Grid>
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

  return { props: post };
}
