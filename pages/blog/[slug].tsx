import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/getContent';
import MDXComponents from '../../components/MDXComponents/MDXComponents';

interface IBlogProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: any;
}
export default function Blog({ mdxSource, frontMatter }: IBlogProps) {
  return (
    <div>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
