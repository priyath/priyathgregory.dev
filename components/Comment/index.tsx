import Giscus from '@giscus/react';

const Comment = ({ mode }: { mode: string }) => {
  return (
    <Giscus
      repo="priyath/priyathgregory.dev"
      repoId="R_kgDOG_HBLQ"
      category="Announcements"
      categoryId="DIC_kwDOG_HBLc4CPQio"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={mode === 'light' ? 'light' : 'dark'}
    />
  );
};

export default Comment;
