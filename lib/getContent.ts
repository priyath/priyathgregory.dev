import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import _ from 'lodash';

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

export const getAllTags = async () => {
  const files = fs.readdirSync(path.join(root, 'data', 'blog'));

  // Use Set to store unique tags
  const uniqueTags = new Set<string>();

  files.forEach((postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', 'blog', postSlug),
      'utf8'
    );
    const { data } = matter(source);

    // Add tags to the set
    const tags = data.tags || [];
    tags.forEach((tag: string) => uniqueTags.add(tag));
  });

  // Convert the set back to an array
  return Array.from(uniqueTags);
};

export const getAllFilesFrontMatter = async (
  type: string,
  tag?: string,
  categoryKey?: string
) => {
  const files = fs.readdirSync(path.join(root, 'data', type));
  const uniqueTags = new Set<string>();
  const categories: { [key: string]: { count: number; label: string } } = {};

  const blogContent = files
    .reduce((allPosts: any[], postSlug: string) => {
      const source = fs.readFileSync(
        path.join(root, 'data', type, postSlug),
        'utf8'
      );
      const { data } = matter(source);

      const tags = data.tags || [];
      tags.forEach((tag: string) => uniqueTags.add(tag));

      if (data.category.key in categories) {
        categories[data.category.key].count += 1;
      } else {
        categories[data.category.key] = {
          count: 1,
          label: data.category.label,
        };
      }

      return [
        {
          ...data,
          slug: postSlug.replace('.mdx', ''),
        },
        ...allPosts,
      ];
    }, [])
    .filter((data) => {
      if (tag) {
        return data.tags.includes(tag);
      }
      if (categoryKey) {
        return _.get(data, 'category.key') === categoryKey;
      }
      return data;
    });

  const posts = blogContent.sort((contentA, contentB) => {
    const dateA = new Date(contentA.publishedAt).getTime();
    const dateB = new Date(contentB.publishedAt).getTime();
    return dateA < dateB ? 1 : -1;
  });

  return {
    posts,
    tags: Array.from(uniqueTags),
    categories,
  };
};
