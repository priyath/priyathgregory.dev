import { AccordionSummaryProps, Box, styled, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { extractMDXTags } from '../utils';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
// import light from 'react-syntax-highlighter/dist/esm/styles/prism/one-light';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius: '5px',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
    sx={{ margin: 0, borderColor: 'red' }}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    borderColor: 'red',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

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

  const mdxTags = extractMDXTags(className);

  return (
    <Box
      sx={{
        fontSize: 14,
        marginY: { xs: 3, md: 4 },
        width: {
          sm: '100%',
          xs: 'calc(100vw - 48px)',
          maxHeight: '95vh',
          overflow: 'auto',
        },
      }}
    >
      <Accordion>
        {mdxTags.title && (
          <AccordionSummary
            sx={{
              backgroundColor: 'background.default',
              margin: 0,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant={'body1'} sx={{ margin: 0 }}>
              {mdxTags.title}
            </Typography>
          </AccordionSummary>
        )}
        <AccordionDetails>
          <SyntaxHighlighter
            wrapLongLines={true}
            language={mdxTags.language}
            style={dark}
            customStyle={{ margin: 0, borderRadius: '5px' }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CodeBlock;
