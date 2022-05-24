import CodeBlock from './CodeBlock';
import InlineCodeBlock from './InlineCodeBlock';
import BlockQuote from './BlockQuote';
import BlogAnchor from './BlogAnchor';
import BlogDivider from './BlogDivider';
import BlogList from './BlogList';
import BlogTypography from './BlogTypography';

const MDXComponents = {
  blockquote: BlockQuote,
  code: InlineCodeBlock,
  pre: CodeBlock,
  p: BlogTypography.BlogParagraph,
  h2: BlogTypography.BlogH2,
  li: BlogList.BlogListItem,
  a: BlogAnchor,
  hr: BlogDivider,
};

export default MDXComponents;
