import { strict as assert } from "assert";

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

const singleNumber = (nums: number[]): number => {
  const numCounts: Record<number, number> = {};

  nums.forEach((n) => {
    numCounts[n] = (numCounts[n] ?? 0) + 1;
  });

  for (const [num, count] of Object.entries(numCounts)) {
    if (count === 1) {
      return parseInt(num);
    }
  }

  return 0;
};

/*
  Time complexity: O(n)
  Space complexity: O(n)
*/

assert.deepEqual(singleNumber([2, 2, 1]), 1);
assert.deepEqual(singleNumber([4, 1, 2, 1, 2]), 4);
assert.deepEqual(singleNumber([1]), 1);

/* Alternative Solution:
   XOR Operation
*/

const singleNumberThroughXorOperation = (nums: number[]): number => {
  return nums.reduce((acc, num) => acc ^ num, 0);
};

/*
  Time complexity: O(n)
  Space complexity: O(1)
*/

assert.deepEqual(singleNumberThroughXorOperation([2, 2, 1]), 1);
assert.deepEqual(singleNumberThroughXorOperation([4, 1, 2, 1, 2]), 4);
assert.deepEqual(singleNumberThroughXorOperation([1]), 1);
