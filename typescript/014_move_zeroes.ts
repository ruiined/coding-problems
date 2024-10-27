import { strict as assert } from "assert";

/* 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

*/

const moveZeroes = (nums: number[]): number[] => {
  let right = nums.length - 1;
  let left = 0;
  let zeroes = 0;

  while (left <= right) {
    if (nums[left] === 0) {
      nums.splice(left, 1);
      zeroes++;
      left--;
    }
    if (nums[right] === 0) {
      nums.splice(right, 1);
      zeroes++;
      right++;
    }
    left++;
    right--;
  }

  for (let i = 0; i < zeroes; i++) {
    nums.push(0);
  }

  return nums;
};

/*
  Time complexity:  O(n^2)
  Space complexity: O(1)
*/

assert.deepEqual(moveZeroes([0]), [0]);
assert.deepEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
assert.deepEqual(moveZeroes([0, 0]), [0, 0]);
assert.deepEqual(moveZeroes([1, 0, 0]), [1, 0, 0]);
assert.deepEqual(moveZeroes([0, 0, 1]), [1, 0, 0]);
assert.deepEqual(moveZeroes([1, 0, 1]), [1, 1, 0]);

/* Alternative solution: */

const moveZeroesBetter = (nums: number[]): number[] => {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
};

/*
  Time complexity: O(n)
  Space complexity: O(1)
*/

assert.deepEqual(moveZeroesBetter([0]), [0]);
assert.deepEqual(moveZeroesBetter([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
assert.deepEqual(moveZeroesBetter([0, 0]), [0, 0]);
assert.deepEqual(moveZeroesBetter([1, 0, 0]), [1, 0, 0]);
assert.deepEqual(moveZeroesBetter([0, 0, 1]), [1, 0, 0]);
assert.deepEqual(moveZeroesBetter([1, 0, 1]), [1, 1, 0]);
