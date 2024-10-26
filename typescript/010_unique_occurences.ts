import { strict as assert } from "assert";

/* 

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 
 
Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

const uniqueOccurrences = (arr: number[]): boolean => {
  const occurences: Record<number, number> = {};

  arr.forEach((n) => {
    occurences[n] = (occurences[n] ?? 0) + 1;
  });

  const values = Object.values(occurences);

  return values.length === new Set(values).size;
};

/*
  Time complexity: O(n)
  Space complexity: O(n)
*/

assert.deepEqual(uniqueOccurrences([1, 2, 2, 1, 1, 3]), true);
assert.deepEqual(uniqueOccurrences([1, 2]), false);
assert.deepEqual(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]), true);
