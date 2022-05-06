export const getPublishedAtString = (dayCount: number) => {
  if (dayCount === 0) {
    return 'Published today';
  }
  if (dayCount === 1) {
    return 'Published yesterday';
  }
  return `Published ${dayCount} days ago`;
};
