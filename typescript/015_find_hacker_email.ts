import { strict as assert } from "assert";

/* 

You don’t like studying for coding interviews alone, so before you go to bed you post a signup form online where people can add their email if they want to practice interview questions together. When you wake up, you realize that other people dread studying for interviews as much as you, and A LOT of devs have signed up.

However, some prankster thought it would be funny to mess up your list, and they duplicated every email address multiple times. But this person made a mistake - the algorithm they used to duplicate emails actually created more copies of their email address in the list than anyone else. To get this hacker back, you want to find their email address in the list... using a computationally efficient algorithm! 💪 🙌

Write a function findHackerEmail that will return the email address of the hacker.

 Input
const emails = ['a@gmail.com', 'hey@skilled.dev', 'b@yahoo.com', 'hey@skilled.dev'];

 Output: findHackerEmail(emails);
'hey@skilled.dev'

*/

const findHackerEmail = (emails: string[]): string => {
  const emailCount: Record<string, number> = {};

  emails.forEach((email) => {
    emailCount[email] = (emailCount[email] ?? 0) + 1;
  });

  let suspect = "";
  let max = 0;

  for (const email in emailCount) {
    if (emailCount[email] > max) {
      suspect = email;
      max = emailCount[email];
    }
  }

  return suspect;
};

/*
  Time complexity: O(n)
  Space complexity: O(n)
*/

assert.deepEqual(
  findHackerEmail([
    "a@gmail.com",
    "hey@skilled.dev",
    "b@yahoo.com",
    "hey@skilled.dev",
  ]),
  "hey@skilled.dev"
);
assert.deepEqual(
  findHackerEmail([
    "a@gmail.com",
    "hey@skilled.dev",
    "a@gmail.com",
    "hey@skilled.dev",
  ]),
  "a@gmail.com"
);
assert.deepEqual(findHackerEmail([]), "");
