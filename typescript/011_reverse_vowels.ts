import { strict as assert } from "assert";

/* 

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

*/

const reverseVowels = (s: string): string => {
  const matches = [...s.matchAll(/[aeiouAEIOU]/g)];
  const result: string[] = s.split("");

  for (let i = 0; i < matches.length; i++) {
    result[matches[i].index ?? 0] = matches.at(-i - 1)?.[0] ?? "";
  }

  return result.join("");
};

/*
  Time complexity: O(n)
  Space complexity: O(n)
*/

assert.deepEqual(reverseVowels("IceCreAm"), "AceCreIm");
assert.deepEqual(reverseVowels("leetcode"), "leotcede");
