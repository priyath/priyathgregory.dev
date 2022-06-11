import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = async (type: string) => {
  return fs.readdirSync(path.join(root, 'data', type));
};

export const getFileBySlug = async (type: string, slug: string) => {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type: string) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  console.log('files: ', files);

  const blogContent = files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);

  return blogContent.sort((contentA, contentB) => {
    const dateA = new Date(contentA.date).getTime();
    const dateB = new Date(contentB.date).getTime();
    return dateA > dateB ? 1 : -1;
  });
};
