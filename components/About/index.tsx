import { Box, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../utils/strings';
import * as React from 'react';
import ImageMediaCard from '../ImageMediaCard';
import { IFrontMatter } from '../../pages/blog/[slug]';
import Image from 'next/image';
import { useEffect } from 'react';

const outterWrapperStyles = {
  marginY: {
    md: 6,
    xs: 10,
  },
  marginX: {
    lg: 8,
    xs: 4,
  },
  maxWidth: '1200px',
};

interface IAboutWrapper {
  posts: IFrontMatter[];
}

const AboutWrapper = (props: IAboutWrapper) => {
  useEffect(() => {
  }, []);

  return (
    <>
      <Grid container sx={outterWrapperStyles}>
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: {
              lg: 6,
              xs: 4,
            },
          }}
        >
          <Grid container spacing={{ xs: 4, lg: 6 }}>
            <Grid item xs={12} md={8} sx={{ textAlign: 'left' }}>
              <Box>
                <Typography variant={'h3'} sx={{ pb: 2, fontWeight: 'bold' }}>
                  Priyath Gregory
                </Typography>
                <Typography variant={'h5'} sx={{ pb: 2 }}>
                  Full-Stack Software Engineer
                </Typography>
                <Typography
                  sx={{
                    width: { xs: '100%' },
                    marginX: 'auto',
                  }}
                  component={'div'}
                  variant={'body1'}
                >
                  {ABOUT_ME_DESCRIPTION}
                  {/*{*/}
                  {/*  <NextLink href={'/blog'} passHref>*/}
                  {/*    <Link sx={{ textDecoration: 'none' }}>blog</Link>*/}
                  {/*  </NextLink>*/}
                  {/*}*/}
                  {/*.*/}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { xs: 'none', md: 'block', textAlign: 'right' },
                }}
              >
                <Image
                  src="/side03.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Image
                  src="/side03.png"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                />
              </Box>
            </Grid>
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
        <Grid
          item
          xs={12}
          sx={{
            overflowX: 'auto',
            display: {
              xs: 'none',
              sm: 'block',
            },
            marginBottom: {
              lg: 8,
              xs: 6,
            },
          }}
        >
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
        <Grid item xs={12}>
          <Box>
            <Typography
              variant={'h4'}
              sx={{
                p: 0,
                pl: 2,
                mb: { xs: 4, lg: 6 },
                borderLeft: '7px solid #54B689',
                fontWeight: 'bold',
                lineHeight: '54px',
              }}
            >
              Latest Blog Posts
            </Typography>
            <Grid container spacing={4}>
              {props.posts.map((item: IFrontMatter, index: number) => {
                return (
                  <Grid key={index} item xs={12} sm={6} lg={4}>
                    <ImageMediaCard frontMatter={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutWrapper;
