import { resolveMonthFromIdx } from '../../utils/utils';

export const getPublishedAtString = (publishedAt: string, format = 'long') => {
  const date = new Date(publishedAt);
  const month = resolveMonthFromIdx(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();

  return format === 'short'
    ? `Published on ${month} ${day}, ${year}`
    : `Written by Priyath Gregory on ${month} ${day}, ${year}`;
};
