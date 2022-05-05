import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { Link } from '@mui/material';

export interface IBlogPostSummary {
  publishedAt: string;
  slug: string;
  summary: string;
  title: string;
}

interface IImageMediaCardProps {
  blogPostSummary: IBlogPostSummary;
}

const ImageMediaCard = (props: IImageMediaCardProps) => {
  const { title, slug, summary, publishedAt } = props.blogPostSummary;

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <NextLink key={0} href={`/blog/${slug}`} passHref>
          <Link>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Link>
        </NextLink>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImageMediaCard;
