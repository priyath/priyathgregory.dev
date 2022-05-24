import { Divider } from '@mui/material';
import * as React from 'react';

const BlogDivider = () => {
  return (
    <Divider
      sx={{
        my: { xs: 4, md: 6 },
        color: 'primary.main',
        width: '20%',
        marginX: 'auto',
      }}
    />
  );
};

export default BlogDivider;
