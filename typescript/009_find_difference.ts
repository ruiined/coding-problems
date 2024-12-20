import { strict as assert } from "assert";

/* 

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000

*/

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const num1Result: number[] = [];
  const num2Result: number[] = [];

  nums1.forEach((n) => {
    if (!nums2.includes(n) && !num1Result.includes(n)) {
      num1Result.push(n);
    }
  });

  nums2.forEach((n) => {
    if (!nums1.includes(n) && !num2Result.includes(n)) {
      num2Result.push(n);
    }
  });

  return [num1Result, num2Result];
};

/*
  Time complexity: O(n^2)
  Space complexity: O(n)
*/

assert.deepEqual(findDifference([1, 2, 3], [2, 4, 6]), [
  [1, 3],
  [4, 6],
]);
assert.deepEqual(findDifference([1, 2, 3, 3], [1, 1, 2, 2]), [[3], []]);

/* 
  Alternative solution using a set:
*/

const findDifferenceThroughSet = (
  nums1: number[],
  nums2: number[]
): number[][] => {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);

  set1.forEach((n) => {
    if (set2.has(n)) {
      set1.delete(n);
      set2.delete(n);
    }
  });

  return [[...set1], [...set2]];
};

/*
  Time complexity: O(n)
  Space complexity: O(n)
*/

assert.deepEqual(findDifferenceThroughSet([1, 2, 3], [2, 4, 6]), [
  [1, 3],
  [4, 6],
]);
assert.deepEqual(findDifferenceThroughSet([1, 2, 3, 3], [1, 1, 2, 2]), [
  [3],
  [],
]);
