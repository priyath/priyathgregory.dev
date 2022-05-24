import { Typography } from '@mui/material';
import * as React from 'react';

const BlogH2 = (props: any) => {
  return (
    <Typography
      variant={'h5'}
      sx={{
        marginTop: { xs: 4, md: 6 },
        marginBottom: 2,
        fontWeight: 'bold',
      }}
    >
      {props.children}
    </Typography>
  );
};

export default BlogH2;
