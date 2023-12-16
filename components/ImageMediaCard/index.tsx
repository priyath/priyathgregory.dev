import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { Box, Divider, Grid, Link } from '@mui/material';
import Image from 'next/image';
import { IFrontMatter } from '../../pages/blog/[slug]';
import { getPublishedAtString } from '../BlogPostHeader/utils';

interface IImageMediaCardProps {
  frontMatter: IFrontMatter;
}

const ImageMediaCard = (props: IImageMediaCardProps) => {
  const { title, slug, summary, coverImage, publishedAt } = props.frontMatter;

  console.log('published at: ', publishedAt);

  return (
    <Card
      sx={{
        maxWidth: '100%',
        height: '100%',
        backgroundColor: 'background.card',
        backgroundImage: 'none',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 0,
      }}
    >
      <CardContent sx={{ backgroundColor: 'background.card', pb: 0 }}>
        <NextLink key={0} href={`/blog/${slug}`} passHref>
          <Link sx={{ textDecoration: 'none' }}>
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
              {title}
            </Typography>
          </Link>
        </NextLink>
        {/*<Typography variant="body1">{summary}</Typography>*/}
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions sx={{ backgroundColor: 'background.card' }}>
        {/*<Button size="small">Share</Button>*/}
        <Grid container pl={1}>
          <Grid item xs={12}>
            <Typography variant={'caption'}>
              {getPublishedAtString(publishedAt, 'short')}
            </Typography>
          </Grid>
          {/*<Grid item xs={12}>*/}
          {/*  <Typography variant={'caption'}>#GCP</Typography>*/}
          {/*</Grid>*/}
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ImageMediaCard;
