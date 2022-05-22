import * as React from 'react';
import { Box, Divider, Link, List, ListItem, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import { extractMDXLanguage } from './utils';
import NextLink from 'next/link';

interface IBlockQuote {
  children: any;
}

const BlockQuote = (props: IBlockQuote) => {
  return (
    <Box
      sx={{
        mt: 4,
        marginLeft: 4,
        paddingLeft: 2,
        borderLeft: 'solid #54B689 2px',
        fontStyle: 'italic',
      }}
    >
      <Typography
        color={'#54B689'}
        variant={'h6'}
        sx={{ fontWeight: 'bold', marginBottom: 2 }}
      >
        Note
      </Typography>
      {props.children}
    </Box>
  );
};

interface ICodeBlock {
  children: {
    type: string;
    props: {
      className: string;
      children: string;
    };
  };
}

const CodeBlock = ({ children }: ICodeBlock) => {
  // if (!children || children.type !== 'code') return null;

  const {
    props: { className, children: code = '' },
  } = children;

  return (
    <Box
      sx={{
        marginY: 4,
        width: {
          sm: '100%',
          xs: 'calc(100vw - 48px)',
        },
      }}
    >
      <SyntaxHighlighter
        wrapLongLines={true}
        language={extractMDXLanguage(className)}
        style={dark}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

const InlineCodeBlock = (props: any) => {
  return (
    <span
      style={{
        fontFamily: 'monospace',
        padding: '0px 3px',
        paddingBottom: '2px',
        borderRadius: '4px',
        backgroundColor: 'rgba(206,206,206,0.4)',
        fontSize: '97%',
      }}
    >
      {props.children}
    </span>
  );
};

const MDXComponents = {
  blockquote: (props: IBlockQuote) => <BlockQuote {...props} />,
  code: (props: any) => <InlineCodeBlock {...props} />,
  pre: (props: ICodeBlock) => <CodeBlock {...props} />,
  p: (props: any) => (
    <Typography variant={'body2'} sx={{ marginBottom: 4 }}>
      {props.children}
    </Typography>
  ),
  h2: (props: any) => (
    <Typography variant={'h5'} sx={{ marginBottom: 2, fontWeight: 'bold' }}>
      {props.children}
    </Typography>
  ),
  li: (props: any) => (
    <ListItem sx={{ display: 'list-item', py: 0, mb: 2 }}>
      {props.children}
    </ListItem>
  ),
  a: (props: any) => {
    return (
      <NextLink href={props.href} passHref>
        <Link target={'_blank'}>{props.children}</Link>
      </NextLink>
    );
  },
  hr: (props: any) => (
    <Divider
      sx={{ my: 6, color: 'primary.main', width: '20%', marginX: 'auto' }}
    />
  ),
};

export default MDXComponents;
