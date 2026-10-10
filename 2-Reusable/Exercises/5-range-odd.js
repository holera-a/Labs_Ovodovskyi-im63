'use strict';

const rangeOdd = (start, end) => {
  if (end < start) return [];
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
};

console.log(rangeOdd(15, 30));
