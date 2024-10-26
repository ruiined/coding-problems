import { strict as assert } from "assert";

/* 

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb

Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.


Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

const isEqual = <T>(arr1: T[], arr2: T[]): boolean => {
  return arr1.sort().toString() === arr2.sort().toString();
};

const closeStrings = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
    return false;
  }

  const letters1: Record<string, number> = {};
  const letters2: Record<string, number> = {};

  for (let i = 0; i < word1.length; i++) {
    letters1[word1[i]] = (letters1[word1[i]] ?? 0) + 1;
    letters2[word2[i]] = (letters2[word2[i]] ?? 0) + 1;
  }

  return (
    isEqual(Object.values(letters1), Object.values(letters2)) &&
    isEqual(Object.keys(letters1), Object.keys(letters2))
  );
};

/*
  Time complexity: O(n)
  Space complexity: O(1)
*/

assert.deepEqual(closeStrings("abc", "bca"), true);
assert.deepEqual(closeStrings("a", "aa"), false);
assert.deepEqual(closeStrings("cabbba", "abbccc"), true);
assert.deepEqual(closeStrings("cabbba", "aabbss"), false);
assert.deepEqual(closeStrings("abbbzcf", "babzzcz"), false);
assert.deepEqual(closeStrings("uau", "ssx"), false);
assert.deepEqual(
  closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"),
  false
);
