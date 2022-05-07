import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import { extractMDXLanguage } from './utils';

interface IBlockQuote {
  children: any;
}

const BlockQuote = (props: IBlockQuote) => {
  return (
    <Box
      sx={{
        marginLeft: 4,
        paddingLeft: 2,
        borderLeft: 'solid #54B689 2px',
        fontStyle: 'italic',
      }}
    >
      <Typography color={'#54B689'} variant={'h6'} sx={{ fontWeight: 'bold' }}>
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
        padding: '0.2em 0.4em',
        borderRadius: '6px',
        backgroundColor: 'rgba(110,118,129,0.4)',
        fontSize: '85%',
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
    <Typography variant={'body2'} sx={{ marginTop: 4 }}>
      {props.children}
    </Typography>
  ),
};

export default MDXComponents;
