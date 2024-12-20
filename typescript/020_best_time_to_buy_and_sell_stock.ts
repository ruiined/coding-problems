import { strict as assert } from "assert";

const maxProfit = (prices: number[]): number => {
  let bought: number | null = null;

  return prices.reduce((profit, price) => {
    if (bought !== null && bought < price) {
      const potentialProfit = price - bought;
      if (!profit || profit < potentialProfit) {
        profit = potentialProfit;
      }
    }

    if (bought === null || bought > price) {
      bought = price;
    }

    return profit;
  }, 0);
};

assert.deepEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.deepEqual(maxProfit([7, 6, 4, 3, 1]), 0);
assert.deepEqual(maxProfit([2, 1, 2, 1, 0, 1, 2]), 2);
