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
  if (!children || children.type !== 'code') return null;

  const {
    props: { className, children: code = '' },
  } = children;

  return (
    <Box sx={{ marginY: 4 }}>
      <SyntaxHighlighter language={extractMDXLanguage(className)} style={dark}>
        {code.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

const MDXComponents = {
  blockquote: (props: IBlockQuote) => <BlockQuote {...props} />,
  pre: (props: ICodeBlock) => <CodeBlock {...props} />,
};

export default MDXComponents;
