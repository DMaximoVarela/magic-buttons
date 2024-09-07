export const paginationButtons = (arr: any) => {
  const allArraysForPage = [];
  for (let index = 0; index < arr.length; index += 6) {
    const arrSplit = arr.slice(index, index + 6);
    allArraysForPage.push(arrSplit);
  }
  return allArraysForPage;
};
