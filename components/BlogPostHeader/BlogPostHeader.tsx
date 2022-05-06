import Image from 'next/image';
import { Box } from '@mui/system';
import testImage from '../../data/images/internal.jpeg';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { pseudoSeparator } from './styles';
import { IFrontMatter } from '../../pages/blog/[slug]';
import { getDateDifferenceInDays } from '../../utils/utils';
import { getPublishedAtString } from './utils';

interface IBlogPostHeader {
  frontMatter: IFrontMatter;
}

const BlogPostHeader = (props: IBlogPostHeader) => {
  const { frontMatter } = props;
  const daysSincePublished = getDateDifferenceInDays(frontMatter?.publishedAt);

  return (
    <Box sx={{ marginX: 0, marginTop: 4 }}>
      <Typography
        variant={'h4'}
        sx={{ py: 1, fontWeight: 'bold', textAlign: 'left' }}
      >
        {frontMatter?.title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant={'body2'}
            sx={{
              textAlign: 'left',
              ...pseudoSeparator,
            }}
          >
            {getPublishedAtString(daysSincePublished)}
          </Typography>
        </Box>
        <Box>
          <Typography variant={'body2'} sx={{ textAlign: 'left' }}>
            {frontMatter?.readingTime?.text}
          </Typography>
        </Box>
      </Box>
      <Image
        src={testImage}
        alt="Picture of the author"
        layout={'responsive'}
        height={380}
      />
    </Box>
  );
};

export default BlogPostHeader;
