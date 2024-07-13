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
import HomeBlogPostItem from '../HomeBlogPostItem';

const outterWrapperStyles = {
  margin: 'auto',
  padding: 0,
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
        <Grid pt={{ xs: 0, md: 3 }} pb={{ xs: 2, md: 8 }} item xs={12} sx={{}}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { xs: 'none', md: 'block', textAlign: 'left' },
                }}
              >
                <Image
                  src="/freepik_coffee.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </Box>
              {/*<Box sx={{ display: { xs: 'block', md: 'none' } }}>*/}
              {/*  <Image*/}
              {/*    src="/freepik_coffee.png"*/}
              {/*    alt="Picture of the author"*/}
              {/*    width={200}*/}
              {/*    height={200}*/}
              {/*  />*/}
              {/*</Box>*/}
            </Grid>
            <Grid
              item
              xs={12}
              py={{ xs: 0, md: 4 }}
              md={8}
              sx={{ textAlign: 'left' }}
            >
              <Box mb={2} ml={{ xs: 0, md: 5 }}>
                <Typography variant={'h3'} sx={{ pb: 2, fontWeight: 'light' }}>
                  Hi, I'm Priyath
                </Typography>
                <Typography variant={'h6'} sx={{ pb: 2, fontWeight: 'light' }}>
                  Welcome to my personal space on the web, where I share my
                  journey and insights as a Software Engineer focused on
                  software architecture, design, and development.
                </Typography>
                <Typography
                  sx={{
                    width: { xs: '100%' },
                    marginX: 'auto',
                  }}
                  component={'div'}
                  variant={'body1'}
                >
                  {/*{*/}
                  {/*  <NextLink href={'/blog'} passHref>*/}
                  {/*    <Link sx={{ textDecoration: 'none' }}>blog</Link>*/}
                  {/*  </NextLink>*/}
                  {/*}*/}
                  {/*.*/}
                </Typography>
              </Box>
              <Box
                ml={{ xs: 0, md: 4 }}
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
              lg: 10,
              xs: 4,
            },
            color: 'primary.main',
            width: '100%',
            marginX: 'auto',
          }}
        />
        <Grid item xs={12} sx={{ mb: { xs: 4, lg: 6 } }}>
          <Box>
            <Grid container sx={{ mb: { xs: 2, lg: 6 } }}>
              <Grid item xs={8}>
                <Typography
                  variant={'h4'}
                  sx={{
                    p: 0,
                    fontWeight: 300,
                    lineHeight: '54px',
                    pl: 2,
                    borderLeft: '5px solid #54B689',
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
            <Grid container spacing={0}>
              {props.posts.map((item: IFrontMatter, index: number) => {
                return (
                  <Grid key={index} item xs={12}>
                    <HomeBlogPostItem frontMatter={item} />
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
