import { getDateDifferenceInDays } from '../../utils/utils';

export const getPublishedAtString = (publishedAt: string) => {
  const dayCount = getDateDifferenceInDays(publishedAt);
  if (dayCount === 0) {
    return 'Published today';
  }
  if (dayCount === 1) {
    return 'Published yesterday';
  }
  return `Published ${dayCount} days ago`;
};
