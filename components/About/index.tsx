import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../pages/strings';
import Image from 'next/image';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import ImageMediaCard, { IBlogPostSummary } from '../ImageMediaCard';
import { getAllFilesFrontMatter } from '../../lib/getContent';

const wrapperStyles = {
  paddingRight: 4,
  paddingBottom: 4,
  margin: 4,
  maxWidth: '1320px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

interface IAboutWrapper {
  posts: any;
}

const AboutWrapper = (props: IAboutWrapper) => {
  return (
    <Grid container spacing={4} sx={wrapperStyles}>
      <Grid item xs={12} md={8}>
        <Box>
          <Typography variant={'h3'} sx={{ py: 1 }}>
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
      <Grid item xs={12}>
        <Box>
          <Typography
            variant={'h4'}
            sx={{ p: 1, pl: 2, mb: 3, borderLeft: '7px solid #3b61ac' }}
          >
            Latest Blog Posts
          </Typography>
          <Grid container spacing={4}>
            {props.posts.map((item: IBlogPostSummary, index: number) => {
              console.log('bloc item: ', item);
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
