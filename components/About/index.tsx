import { Box, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../pages/strings';
import * as React from 'react';
import ImageMediaCard from '../ImageMediaCard';
import { IFrontMatter } from '../../pages/blog/[slug]';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const outterWrapperStyles = {
  marginY: {
    md: 6,
    xs: 10,
  },
  marginX: {
    lg: 8,
    xs: 4,
  },
  maxWidth: '1320px',
};

interface IAboutWrapper {
  posts: IFrontMatter[];
}

const AboutWrapper = (props: IAboutWrapper) => {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    GitHubCalendar('.calendar', 'priyath', {
      responsive: true,
      tooltips: true,
    });
  }, []);

  return (
    <>
      <Grid container sx={outterWrapperStyles}>
        <Grid
          item
          xs={12}
          sx={{
            paddingBottom: {
              lg: 6,
              xs: 4,
            },
            marginBottom: {
              lg: 6,
              xs: 4,
            },
            borderBottom: '1px solid',
            borderBottomColor: 'tertiary.main',
          }}
        >
          <Grid container spacing={{ xs: 4, lg: 6 }}>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant={'h3'} sx={{ pb: 2, fontWeight: 'bold' }}>
                  Priyath Gregory
                </Typography>
                <Typography variant={'h5'} sx={{ pb: 2 }}>
                  Full-Stack Software Engineer
                </Typography>
                <Typography component={'div'} variant={'body1'}>
                  {ABOUT_ME_DESCRIPTION}
                  {
                    <Box
                      onClick={() => {
                        router.push('/blog');
                      }}
                      sx={{
                        display: 'inline-block',
                        color: 'primary.main',
                        cursor: 'pointer',
                      }}
                    >
                      blog
                    </Box>
                  }
                  .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Image
                  src="/pic02.png"
                  alt="Picture of the author"
                  width={350}
                  height={350}
                />
              </Box>
            </Grid>
            {/*<Grid*/}
            {/*  item*/}
            {/*  xs={12}*/}
            {/*  sx={{*/}
            {/*    overflowX: 'auto',*/}
            {/*    display: {*/}
            {/*      xs: 'none',*/}
            {/*      sm: 'block',*/}
            {/*    },*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <div className="calendar" style={{ width: '80%' }}>*/}
            {/*    Loading data...*/}
            {/*  </div>*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>
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
