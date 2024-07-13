import * as React from 'react';
import { IFrontMatter } from '../../pages/blog/[slug]';
import { Chip, Divider, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

interface IImageMediaCardProps {
  frontMatter: IFrontMatter;
}

const HomeBlogPostItem = (props: IImageMediaCardProps) => {
  const { title, slug, summary, coverImage, publishedAt, tags } =
    props.frontMatter;

  return (
    <div>
      <Grid container spacing={0} pb={{ xs: 1, md: 2 }} pt={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={8}>
          <NextLink href={`blog/${slug}`} passHref>
            <Link
              color={'text.primary'}
              sx={{
                textDecoration: 'none',
              }}
            >
              <Typography
                pt={0}
                color={'text.primary'}
                sx={{
                  width: { xs: '100%' },
                  marginX: 'auto',
                  fontWeight: 400,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
                variant={'h6'}
              >
                {title}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography
            sx={{
              width: { xs: '100%' },
              marginX: 'auto',
              fontFamily: 'monospace',
              display: 'flex',
              justifyContent: { xs: 'left', md: 'right' },
            }}
            component={'div'}
            variant={'caption'}
          >
            {publishedAt}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={12}
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          gap={2}
        >
          {tags.map((tagStr, index) => (
            // <Chip
            //   key={index}
            //   label={tagStr}
            //   sx={{
            //     margin: 0.5,
            //     borderRadius: 2,
            //     height: '28px',
            //     textDecoration: 'none',
            //     '&:hover': {
            //       color: 'primary.main',
            //     },
            //     cursor: 'pointer',
            //   }}
            // />
            <Typography
              sx={{
                fontFamily: 'monospace',
                '&:hover': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                },
                cursor: 'pointer',
              }}
              component={'div'}
              variant={'caption2'}
            >
              #{tagStr}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Divider
        sx={{
          color: 'primary.main',
          width: '100%',
          marginX: 'auto',
        }}
      />
    </div>
  );
};

export default HomeBlogPostItem;
