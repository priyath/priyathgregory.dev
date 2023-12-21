import {
  Box,
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
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
        <Grid item xs={8}>
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
                      <Grid item xs={12} mb={0}>
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
                      {/*<Grid item xs={1} sx={{ textAlign: 'right' }}></Grid>*/}
                      <Grid item xs={12} sx={{ textAlign: 'left' }} mb={2}>
                        <Grid container>
                          <Grid item xs={2}>
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
                          <Grid item xs={4} sx={{ display: 'flex' }}>
                            <Typography
                              fontFamily={'monospace'}
                              sx={{
                                color: 'primary.main',
                                pr: 1,
                              }}
                              gutterBottom
                              variant="caption"
                              component="div"
                            >
                              #
                            </Typography>
                            {['javascript', 'nosql', 'databases'].map(
                              (item) => {
                                return (
                                  <Typography
                                    fontFamily={'monospace'}
                                    sx={{
                                      '&:hover': {
                                        color: 'primary.main',
                                      },
                                      pr: 1,
                                    }}
                                    gutterBottom
                                    variant="caption"
                                    component="div"
                                  >
                                    {item}
                                  </Typography>
                                );
                              }
                            )}
                          </Grid>
                          <Divider
                            sx={{
                              color: 'primary.main',
                              width: '100%',
                              marginX: 'auto',
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} mb={5}>
                        <Typography variant="body1">{item.summary}</Typography>
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
                      <Grid container key={index}>
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
            <Grid item xs={12} mb={3}>
              <Box>
                <Typography
                  variant={'h6'}
                  sx={{
                    color: 'text.secondary',
                    lineHeight: '54px',
                  }}
                >
                  Popular Topics
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
            <Grid item xs={12} mb={2}>
              {[
                'GCP',
                'Javascript',
                'GCP',
                'Javascript',
                'GCP',
                'Javascript',
                'GCP',
                'Javascript',
                'GCP',
                'Javascript',
                'GCP',
                'Javascript',
              ].map((item, index) => {
                return (
                  <Chip
                    key={index}
                    label={item}
                    sx={{ margin: 0.2, marginY: 0.3, borderRadius: 2 }}
                  />
                );
              })}
            </Grid>
            {/*<Grid item xs={12} mb={3}>*/}
            {/*  <Box>*/}
            {/*    <Typography*/}
            {/*      variant={'h6'}*/}
            {/*      sx={{*/}
            {/*        color: 'text.secondary',*/}
            {/*        lineHeight: '54px',*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      Featured Posts*/}
            {/*    </Typography>*/}
            {/*  </Box>*/}
            {/*  <Divider*/}
            {/*    sx={{*/}
            {/*      color: 'primary.main',*/}
            {/*      width: '100%',*/}
            {/*      marginX: 'auto',*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12}>*/}
            {/*  <List sx={{ paddingTop: 0 }}>*/}
            {/*    {[*/}
            {/*      "Javascript Internals: What's Under the Hood?",*/}
            {/*      'CouchDB: Document Conflicts',*/}
            {/*    ].map((item, index) => {*/}
            {/*      return (*/}
            {/*        <ListItem*/}
            {/*          key={index}*/}
            {/*          sx={{*/}
            {/*            padding: 0.2,*/}
            {/*            paddingBottom: 0,*/}
            {/*            paddingLeft: 0,*/}
            {/*            paddingTop: 0,*/}
            {/*          }}*/}
            {/*        >*/}
            {/*          <ListItemText primary={item} />*/}
            {/*        </ListItem>*/}
            {/*      );*/}
            {/*    })}*/}
            {/*  </List>*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogHome;
