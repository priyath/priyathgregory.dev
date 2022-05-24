import * as React from 'react';
import { ListItem } from '@mui/material';

const BlogListItem = (props: any) => {
  console.log('list item: ', props);
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
      {props.children}
    </ListItem>
  );
};

export default BlogListItem;
