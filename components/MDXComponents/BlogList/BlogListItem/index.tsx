import * as React from 'react';
import { ListItem } from '@mui/material';

const BlogListItem = (props: any) => {
  return (
    <ListItem sx={{ display: 'list-item', py: 0, mb: 2 }}>
      {props.children}
    </ListItem>
  );
};

export default BlogListItem;
