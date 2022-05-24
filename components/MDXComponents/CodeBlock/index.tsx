import { Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { extractMDXLanguage } from '../utils';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import * as React from 'react';

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
  const {
    props: { className, children: code = '' },
  } = children;

  return (
    <Box
      sx={{
        marginY: { xs: 3, md: 4 },
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

export default CodeBlock;
