'use strict';

const sum = (...args) => {
  let total = 0;
  while (args.length > 0) {
    total += args.pop();
  }
  return total;
};

module.exports = { sum };
