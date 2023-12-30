import Image from 'next/image';
import * as React from 'react';
import { Box } from '@mui/material';

const BlogImage = (props: any) => {
  const { src } = props;

  return (
    <Box
      sx={{
        fontSize: 14,
        marginY: { xs: 3, md: 4 },
        padding: { xs: 0, md: 2 },
        width: {
          sm: '100%',
          xs: 'calc(100vw - 48px)',
          maxHeight: '95vh',
          overflow: 'auto',
        },
        backgroundColor: 'rgba(255, 255, 255, .05)',
      }}
    >
      <Image
        width={'100%'}
        height={65}
        src={src}
        alt="blog image"
        layout="responsive"
        quality={100}
      />
    </Box>
  );
};

export default BlogImage;
