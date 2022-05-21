import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import Image from 'next/image';
import { IFrontMatter } from '../../pages/blog/[slug]';

interface IImageMediaCardProps {
  frontMatter: IFrontMatter;
}

const ImageMediaCard = (props: IImageMediaCardProps) => {
  const { title, slug, summary, coverImage } = props.frontMatter;

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia>
        <Image
          width={'100%'}
          height={65}
          src={`/${coverImage}`}
          alt="hero image thumbnail"
          layout="responsive"
          quality={100}
        />
      </CardMedia>
      <CardContent>
        <NextLink key={0} href={`/blog/${slug}`} passHref>
          <Link>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Link>
        </NextLink>
        <Typography variant="body1">{summary}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImageMediaCard;
