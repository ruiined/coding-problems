import { strict as assert } from "assert";

/* 

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/

const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  return str1.substring(0, gcd(str1.length, str2.length));
};

/*
  Time complexity: O(n + m + log(min(n, m)))
  Space complexity: O(n + m)
*/

assert.deepEqual(gcdOfStrings("ABCABC", "ABC"), "ABC");
assert.deepEqual(gcdOfStrings("ABABAB", "ABAB"), "AB");
assert.deepEqual(gcdOfStrings("LEET", "CODE"), "");
assert.deepEqual(gcdOfStrings("ABCDEF", "ABC"), "");
assert.deepEqual(gcdOfStrings("ABABABAB", "ABAB"), "ABAB");
assert.deepEqual(gcdOfStrings("AAAAAAAAA", "AAACCC"), "");
