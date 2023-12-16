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
import { ABOUT_ME_DESCRIPTION } from '../../utils/strings';
import * as React from 'react';
import ImageMediaCard from '../ImageMediaCard';
import { IFrontMatter } from '../../pages/blog/[slug]';
import Image from 'next/image';
import { useEffect } from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import { getPublishedAtString } from '../BlogPostHeader/utils';

const outterWrapperStyles = {
  margin: 'auto',
};

interface IAboutWrapper {
  posts: IFrontMatter[];
}

const HomeWrapper = (props: IAboutWrapper) => {
  useEffect(() => {}, []);

  return (
    <>
      <Grid container sx={outterWrapperStyles}>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: 'center',
            overflowX: 'auto',
          }}
        >
          <Grid container sx={{ marginX: 'auto', maxWidth: '800px' }}>
            <Grid item xs={3}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                #PriyathGregory.Dev
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                #About Me
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                #Blog
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'text.secondary',
                  lineHeight: '54px',
                }}
              >
                #Github
              </Typography>
            </Grid>
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
        <Grid container sx={{ maxWidth: '1200px', margin: 'auto', gap: 12 }}>
          <Grid item xs={12} sx={{ marginX: '20%' }}>
            <Box>
              <Grid container spacing={4}>
                {props.posts.map((item: IFrontMatter, index: number) => {
                  return (
                    <Grid key={index} item xs={12} sm={12} lg={12}>
                      <ImageMediaCard frontMatter={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              </Grid>
              <Divider
                sx={{
                  color: 'primary.main',
                  width: '100%',
                  marginX: 'auto',
                }}
              />
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
              <Grid item xs={12}>
                <Box>
                  <Typography
                    variant={'h6'}
                    sx={{
                      color: 'text.secondary',
                      lineHeight: '54px',
                    }}
                  >
                    Featured Posts
                  </Typography>
                </Box>
              </Grid>
              <Divider
                sx={{
                  color: 'primary.main',
                  width: '100%',
                  marginX: 'auto',
                }}
              />
              <Grid item xs={12}>
                <List sx={{ paddingTop: 0 }}>
                  {[
                    "Javascript Internals: What's Under the Hood?",
                    'CouchDB: Document Conflicts',
                  ].map((item, index) => {
                    return (
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
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeWrapper;
