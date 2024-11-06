import { strict as assert } from "assert";
/* 

Write a function groupPermutationsOfPalindromes that takes an array of strings as the input and returns an array of arrays where the sub-arrays in the result are all permutations of the same palindrome.

For a string to be included in the output, it must be the permutation of a palindrome. That means if you rearranged the characters of the string, it could form a palindrome.

We also want to group strings that are permutations of each other. That means all strings in a sub-array could be rearranged to form any other string in the group (or the same palindrome).

The result array and sub-arrays can be in any order.

The input strings will all be lowercase alphanumeric characters.

Input
const strings = ['racecar', 'acerrac', 'aaccerr', 'naa', 'aan', 'todo', 'doto', 'code', 'bob'];

Output: groupPermutationsOfPalindromes(strings);
[['aaccerr', 'acerrac', 'racecar'], ['aan', 'naa'], ['bob']];

*/

const isPalindromePermutation = (str: string): boolean => {
  const charCount: Record<string, number> = {};
  let oddChars = 0;

  str
    .split("")
    .forEach((char) => (charCount[char] = (charCount[char] ?? 0) + 1));

  for (const char in charCount) {
    if (charCount[char] % 2 !== 0) {
      oddChars++;
    }
  }

  return oddChars <= 1;
};

assert.deepEqual(isPalindromePermutation("boo"), true);
assert.deepEqual(isPalindromePermutation("acerrac"), true);
assert.deepEqual(isPalindromePermutation("doto"), false);

const groupPermutationsOfPalindromes = (strings: string[]): string[][] => {
  const groups: Record<string, string[]> = {};

  strings.forEach((str) => {
    if (isPalindromePermutation(str)) {
      const sortedStr = str.split("").sort().join("");
      groups[sortedStr] = [...(groups[sortedStr] ?? []), str];
    }
  });

  return Object.values(groups);
};

/*
  Time complexity: 
  Space complexity: 
*/

assert.deepEqual(groupPermutationsOfPalindromes([]), []);
assert.deepEqual(
  groupPermutationsOfPalindromes(["bob"]),
  [["bob"]],
  "include palindromes"
);
assert.deepEqual(
  groupPermutationsOfPalindromes(["boa"]),
  [],
  "exclude non palindromes"
);
assert.deepEqual(
  groupPermutationsOfPalindromes([
    "racecar",
    "acerrac",
    "aaccerr",
    "naa",
    "aan",
    "todo",
    "doto",
    "code",
    "bob",
  ]),
  [["racecar", "acerrac", "aaccerr"], ["naa", "aan"], ["bob"]]
);
