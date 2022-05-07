import { Box, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../pages/strings';
import Image from 'next/image';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import ImageMediaCard, { IBlogPostSummary } from '../ImageMediaCard';
import { getAllFilesFrontMatter } from '../../lib/getContent';

const outterWrapperStyles = {
  marginY: {
    xs: 8,
  },
  marginX: {
    lg: 8,
    xs: 4,
  },
  maxWidth: '1320px',
};

interface IAboutWrapper {
  posts: any;
}

const AboutWrapper = (props: IAboutWrapper) => {
  return (
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ borderBottom: 'solid 5x red' }}>
            <Box sx={{ borderBottom: 'solid 5x red' }}>
              <Typography variant={'h3'} sx={{ py: 2, fontWeight: 'bold' }}>
                Priyath Gregory
              </Typography>
              <Typography variant={'h5'} sx={{ pb: 2 }}>
                Full-Stack Software Engineer
              </Typography>
              <Typography variant={'body1'}>{ABOUT_ME_DESCRIPTION}</Typography>
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
              borderLeft: '7px solid #3b61ac',
              fontWeight: 'bold',
              lineHeight: '54px',
            }}
          >
            Latest Blog Posts
          </Typography>
          <Grid container spacing={4}>
            {props.posts.map((item: IBlogPostSummary, index: number) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={4}>
                  <ImageMediaCard blogPostSummary={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutWrapper;
