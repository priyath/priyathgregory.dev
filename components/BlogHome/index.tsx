import { Box, Divider, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IFrontMatter } from '../../pages/blog/[slug]';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const outterWrapperStyles = {
  margin: 'auto',
  maxWidth: '1200px',
};

interface IBlogHome {
  posts: IFrontMatter[];
}
const BlogHome = (props: IBlogHome) => {
  const { posts } = props;
  console.log(posts);
  return (
    <>
      <Grid container sx={outterWrapperStyles}>
        <Grid item xs={7}>
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
                  All Posts
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mb: { xs: 4, lg: 6 } }}>
              {props.posts.map((item: IFrontMatter, index: number) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sx={{ textAlign: 'right' }}>
                        <Typography
                          fontFamily={'monospace'}
                          sx={{
                            color: 'primary.main',
                          }}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          {item.publishedAt}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider
                      sx={{
                        marginBottom: {
                          lg: 6,
                          xs: 4,
                        },
                        color: 'primary.main',
                        width: '100%',
                        marginX: 'auto',
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </>
  );
};

export default BlogHome;
