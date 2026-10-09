'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let total = 0;
  do {
    total += args.pop();
  } while (args.length > 0);
  return total;
};

module.exports = { sum };
