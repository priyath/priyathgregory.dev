import { Box, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IFrontMatter } from '../../pages/blog/[slug]';
import NextLink from 'next/link';
import BlogSidePanel from './BlogSidePanel';

const outterWrapperStyles = {
  margin: 'auto',
  maxWidth: '1200px',
};

export interface IBlogHome {
  posts: IFrontMatter[];
  tags?: string[];
  tag?: string;
  category?: string;
  categories: { [key: string]: { count: number; label: string } };
}
const BlogHome = (props: IBlogHome) => {
  const { posts, tag, tags, categories, category } = props;

  return (
    <>
      <Grid container sx={outterWrapperStyles}>
        <Grid item xs={12} md={8}>
          <Box>
            <Grid container sx={{ mb: { xs: 4, lg: 6 } }}>
              <Grid item xs={8}>
                <Typography
                  variant={'h4'}
                  sx={{
                    p: 0,
                    pl: 2,
                    borderLeft: '5px solid #54B689',
                    fontWeight: 'bold',
                    lineHeight: '54px',
                  }}
                >
                  {tag
                    ? `${tag}`
                    : category
                    ? `${categories[category].label}`
                    : 'All Posts'}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                mb: { xs: 4, lg: 6 },
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              {props.posts.map((item: IFrontMatter, index: number) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Grid container>
                      <Grid item xs={12} mb={0}>
                        <NextLink key={0} href={`/blog/${item.slug}`} passHref>
                          <Link
                            sx={{
                              textDecoration: 'none',
                            }}
                            color={'text.primary'}
                          >
                            <Typography
                              mb={0.5}
                              variant="h4"
                              component="div"
                              fontWeight={700}
                              sx={{
                                '&:hover': {
                                  color: 'primary.main',
                                },
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        </NextLink>
                      </Grid>
                      {/*<Grid item xs={1} sx={{ textAlign: 'right' }}></Grid>*/}
                      <Grid item xs={12} sx={{ textAlign: 'left' }} mb={0}>
                        <Grid container>
                          <Grid item xs={3}>
                            <Typography
                              fontFamily={'monospace'}
                              sx={{
                                color: 'primary.main',
                              }}
                              gutterBottom
                              variant="caption"
                              component="div"
                            >
                              {item.publishedAt}
                            </Typography>
                          </Grid>
                          {/*<Grid item xs={4}>*/}
                          {/*  <Typography*/}
                          {/*    fontFamily={'monospace'}*/}
                          {/*    sx={{*/}
                          {/*      color: 'primary.main',*/}
                          {/*      pr: 1,*/}
                          {/*    }}*/}
                          {/*    gutterBottom*/}
                          {/*    variant="caption"*/}
                          {/*    component="div"*/}
                          {/*  >*/}
                          {/*    #*/}
                          {/*  </Typography>*/}
                          {/*  {(item.tags || []).map((tagStr, index) => {*/}
                          {/*    return (*/}
                          {/*      <Typography*/}
                          {/*        key={index}*/}
                          {/*        fontFamily={'monospace'}*/}
                          {/*        sx={{*/}
                          {/*          pr: 1,*/}
                          {/*        }}*/}
                          {/*        gutterBottom*/}
                          {/*        variant="caption"*/}
                          {/*        component="div"*/}
                          {/*      >*/}
                          {/*        <NextLink*/}
                          {/*          key={0}*/}
                          {/*          href={`/tags/${tagStr}`}*/}
                          {/*          passHref*/}
                          {/*        >*/}
                          {/*          <Link*/}
                          {/*            color={'text.primary'}*/}
                          {/*            sx={{*/}
                          {/*              textDecoration: 'none',*/}
                          {/*              '&:hover': {*/}
                          {/*                color: 'primary.main',*/}
                          {/*              },*/}
                          {/*            }}*/}
                          {/*          >*/}
                          {/*            {tagStr}*/}
                          {/*          </Link>*/}
                          {/*        </NextLink>*/}
                          {/*      </Typography>*/}
                          {/*    );*/}
                          {/*  })}*/}
                          {/*</Grid>*/}
                          {/*<Divider*/}
                          {/*  sx={{*/}
                          {/*    color: 'primary.main',*/}
                          {/*    width: '100%',*/}
                          {/*    marginX: 'auto',*/}
                          {/*  }}*/}
                          {/*/>*/}
                        </Grid>
                      </Grid>
                      <Grid item xs={12} mb={5}>
                        <Typography variant="body2">{item.summary}</Typography>
                      </Grid>
                    </Grid>
                    {/*<Divider*/}
                    {/*  sx={{*/}
                    {/*    marginBottom: {*/}
                    {/*      lg: 6,*/}
                    {/*      xs: 4,*/}
                    {/*    },*/}
                    {/*    color: 'primary.main',*/}
                    {/*    width: '100%',*/}
                    {/*    marginX: 'auto',*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
        <Grid item xs={12} md={3}>
          <BlogSidePanel
            posts={posts}
            tags={tags}
            relatedTags={[tag as string]}
            categories={categories}
            category={category}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BlogHome;
