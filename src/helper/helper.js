export const ardorArraySortByColumn = (arr, colIndex, filterType = 'default',sortOrder='asc') => {

  const ardorSortFunction = (a, b) => {
    if (filterType === 'number') {
      const aVal = (a[colIndex]) ? parseInt(a[colIndex], 10) : 0;
      const bVal = (b[colIndex]) ? parseInt(b[colIndex], 10) : 0;

      if (aVal === bVal) {
        return 0;
      }
      return (aVal < bVal) ? -1 : 1;
    }
    if (a[colIndex] === b[colIndex]) {
      return 0;
    }
    return (a[colIndex] < b[colIndex]) ? -1 : 1;
  };
  arr.sort(ardorSortFunction);
  return (sortOrder==='desc')?arr.reverse():arr;
};

