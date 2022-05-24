import NextLink from 'next/link';
import { Link } from '@mui/material';
import * as React from 'react';

const BlogAnchor = (props: any) => {
  return (
    <NextLink href={props.href} passHref>
      <Link target={'_blank'}>{props.children}</Link>
    </NextLink>
  );
};

export default BlogAnchor;
