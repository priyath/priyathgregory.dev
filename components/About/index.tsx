import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ABOUT_ME_DESCRIPTION } from '../../pages/strings';
import Image from 'next/image';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import ImageMediaCard from '../ImageMediaCard';

const wrapperStyles = {
  paddingRight: 4,
  paddingBottom: 4,
  margin: 4,
  maxWidth: 'xl',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const AboutWrapper = () => {
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
        {/*<Box>*/}
        {/*  <Typography*/}
        {/*    variant={'h4'}*/}
        {/*    sx={{ p: 1, pl: 2, mb: 2, borderLeft: '7px solid #3b61ac' }}*/}
        {/*  >*/}
        {/*    What I do*/}
        {/*  </Typography>*/}
        {/*  <Typography variant={'body1'}>{ABOUT_ME_WHAT_I_DO}</Typography>*/}
        {/*  <Grid container spacing={4} sx={{ margin: 5 }}>*/}
        {/*    <Grid item xs={12} md={4}>*/}
        {/*      <Box>*/}
        {/*        <Typography variant={'h6'}>Vanilla Javascript</Typography>*/}
        {/*      </Box>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={4}>*/}
        {/*      <Box>*/}
        {/*        {' '}*/}
        {/*        <Typography variant={'h6'}>React & Redux</Typography>*/}
        {/*      </Box>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={4}>*/}
        {/*      <Box>*/}
        {/*        {' '}*/}
        {/*        <Typography variant={'h6'}>NodeJS</Typography>*/}
        {/*      </Box>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Box>*/}
        <Divider sx={{ backgroundColor: 'rgba(107,107,107,0.7)' }} />
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
            <Grid item xs={12} sm={6} lg={4}>
              <ImageMediaCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <ImageMediaCard />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <ImageMediaCard />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutWrapper;
