export const extractMDXTags = (tagString: string) => {
  let lan = 'typescript';
  let title = null;
  let expanded = true;

  const langArrByColon = (tagString || '').split(':');

  if (langArrByColon.length > 0) {
    const langArr = langArrByColon[0].split('-');

    if (langArr.length > 1) {
      lan = langArr[1];
    }
  }

  if (langArrByColon.length > 1) {
    title = langArrByColon[1];
  }

  if (langArrByColon.length > 2) {
    expanded = langArrByColon[2] !== 'collapsed';
  }

  return {
    language: lan,
    title,
    expanded,
  };
};
