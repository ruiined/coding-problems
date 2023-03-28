import { strict as assert } from "assert";

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

const longestCommonPrefix = (strings: string[]): string => {
  for (let i = 0; i < strings[0].length; i++) {
    if (!strings.every((s) => s[i] === strings[0][i]))
      return strings[0].slice(0, i);
  }
  return strings[0];
};

/*
  Time complexity: O(n*m)
  Space complexity: O(1)
*/

assert.deepEqual(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
assert.deepEqual(longestCommonPrefix(["dog", "racecar", "car"]), "");
