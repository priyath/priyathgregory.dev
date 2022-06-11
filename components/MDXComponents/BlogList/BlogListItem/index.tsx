import * as React from 'react';
import { ListItem, Typography } from '@mui/material';

const BlogListItem = (props: any) => {
  return (
    <ListItem
      sx={{
        display: 'list-item',
        py: 0,
        mb: 2,
        '&:last-child': {
          mb: {
            xs: 3,
            md: 4,
          },
        },
      }}
    >
      <Typography
        variant={'body2'}
        sx={{ marginBottom: { xs: 2, md: 2 }, lineHeight: 1.6 }}
      >
        {props.children}
      </Typography>
    </ListItem>
  );
};

export default BlogListItem;
