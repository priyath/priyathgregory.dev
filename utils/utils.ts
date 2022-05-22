const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDateDifferenceInDays = (dateString: string) => {
  const targetDate = new Date(dateString);
  const currDate = new Date();
  const diff = new Date(currDate.getTime() - targetDate.getTime());

  return diff.getUTCDate() - 1;
};

export const resolveMonthFromIdx = (monthIdx: number) => {
  return monthNames[monthIdx];
};
