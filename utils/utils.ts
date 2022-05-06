export const getDateDifferenceInDays = (dateString: string) => {
  const targetDate = new Date(dateString);
  const currDate = new Date();
  const diff = new Date(currDate.getTime() - targetDate.getTime());

  return diff.getUTCDate() - 1;
};
