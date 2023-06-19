// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const problem1 = await prisma.problem.upsert({
    where: { title: 'Two sum' },
    update: {},
    create: {
      title: 'Two sum',
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order`,
      url: 'https://leetcode.com/problems/two-sum/',
    },
  });
  const problem2 = await prisma.problem.upsert({
    where: { title: 'Valid Parentheses' },
    update: {},
    create: {
      title: 'Valid Parentheses',
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

      An input string is valid if:
      
      Open brackets must be closed by the same type of brackets.
      Open brackets must be closed in the correct order.
      Every close bracket has a corresponding open bracket of the same type.r`,
      url: 'https://leetcode.com/problems/valid-parentheses/',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
