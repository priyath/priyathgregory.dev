export const extractMDXLanguage = (langClassName: string) => {
  console.log('received lang string: ', langClassName);
  const langArr = (langClassName || '').split('-');

  if (langArr.length > 1) {
    return langArr[1];
  }

  return 'javascript';
};
