import { Avatar, Box, Divider, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../utils/strings';
import * as React from 'react';
import ImageMediaCard from '../ImageMediaCard';
import { IFrontMatter } from '../../pages/blog/[slug]';
import Image from 'next/image';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

const outterWrapperStyles = {
  margin: 'auto',
  maxWidth: '1200px',
};

interface IAboutWrapper {
  posts: IFrontMatter[];
}

const AboutWrapper = (props: IAboutWrapper) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    GitHubCalendar('.calendar', 'priyath', {
      responsive: true,
      tooltips: true,
      global_stats: true,
    });
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
          <Grid container>
            <Grid item xs={12} md={8} sx={{ textAlign: 'left' }}>
              <Box mb={2}>
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  paddingBottom: 2,
                  gap: 1.5,
                }}
              >
                <a
                  href="https://www.github.com/priyath"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: 'background.icon',
                    }}
                  >
                    <Box
                      color={'secondary.main'}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <FaGithubAlt size={'0.8em'} />
                    </Box>
                  </Avatar>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyathg"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: 'background.icon',
                    }}
                  >
                    <Box
                      color={'secondary.main'}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <FaLinkedinIn size={'0.8em'} />
                    </Box>
                  </Avatar>
                </a>
                <a
                  href="https://medium.com/@priyathgregory"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: 'background.icon',
                    }}
                  >
                    <Box
                      color={'secondary.main'}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <FaMediumM size={'0.8em'} />
                    </Box>
                  </Avatar>
                </a>
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
        {/*<Grid*/}
        {/*  item*/}
        {/*  xs={12}*/}
        {/*  sx={{*/}
        {/*    overflowX: 'auto',*/}
        {/*    display: {*/}
        {/*      xs: 'none',*/}
        {/*      sm: 'block',*/}
        {/*    },*/}
        {/*    marginBottom: {*/}
        {/*      lg: 8,*/}
        {/*      xs: 6,*/}
        {/*    },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Typography*/}
        {/*    variant={'h5'}*/}
        {/*    sx={{*/}
        {/*      color: 'primary.main',*/}
        {/*      textAlign: 'center',*/}
        {/*      mb: { xs: 2, lg: 3 },*/}
        {/*      fontFamily: 'monospace',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Github Contributions Calendar*/}
        {/*  </Typography>*/}
        {/*  <Box className="calendar" sx={{ width: { xs: '100%', lg: '80%' } }}>*/}
        {/*    Loading data...*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
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
        <Grid item xs={12} sx={{ mb: { xs: 4, lg: 6 } }}>
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
                  Latest Blog Posts
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <Button
                  size="medium"
                  sx={{ margin: 0.5, paddingX: 2, paddingY: 1 }}
                >
                  <NextLink href={`/blog`} passHref>
                    <Link sx={{ textDecoration: 'none' }}>View All</Link>
                  </NextLink>
                </Button>
              </Grid>
            </Grid>
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
