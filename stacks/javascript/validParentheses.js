// Given a string of parentheses and brackets, judge if the string is
// valid (every parenthesis has an open/close in correct order)

let sample = "[()()[()]{()}(]";

// const validParentheses = (sample) => {
//   if (sample.length < 2) return false;
//   if (sample.length % 2 !== 0) return false;
//   const sampleArr = sample.split("");
//   const arrStack = [];
//   for (let i = 0; i < sampleArr.length; i++) {
//     const p = sampleArr[i];
//     if (p === "(" || p === "[" || p === "{") {
//       arrStack.push(p);
//     } else {
//       let lastInStack = arrStack.length - 1;
//       if (arrStack[lastInStack] === "(") {
//         if (p === ")") {
//           arrStack.pop();
//         } else {
//           return false;
//         }
//       } else if (arrStack[lastInStack] === "[") {
//         if (p === "]") {
//           arrStack.pop();
//         } else {
//           return false;
//         }
//       } else if (arrStack[lastInStack] === "{") {
//         if (p === "}") {
//           arrStack.pop();
//         } else {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   if (arrStack.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(validParentheses(sample));

const validParenthesesHashmap = (sample) => {
  // Early returns
  if (sample.length < 2 || sample.length % 2 !== 0) return false;
  // Create hashmap
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // split sample string into an array
  const sampleArr = sample.split("");
  const stack = [];
  // Validation logic
  for (const p of sampleArr) {
    if (p === "(" || p === "[" || p === "{") {
      stack.push(p);
    } else if (stack[stack.length - 1] === map[p]) {
      stack.pop();
    } else {
      return false;
    }
  }
  // Measure true or false
  return stack.length ? false : true;
};

console.log(validParenthesesHashmap(sample));

// Max's NOTES -----------------------------------------------------------------------

// Explanation:
//  - As a general overview, we are forming a stack with open parentheses, and popping the top off the stack
//    if the next closed parentheses matches according to our map. If the next close parentheses does not match
//    according to our map, the string is invalid and we return false early. Finally, if our stack is empty, that means
//    our string was valid. Else, if our stack is not empty, that means there were too many open parentheses.

// Edge Cases and Assumptions:
//  - We are assuming all the inputs only contain a string of parentheses, brackets, and curly braces
//  - If the string length is less than 1, we return false early
//  - If the string length is odd, we return false early

// Time-complexity
//  - Worst case: Linear O(n)
//    -> If the string is valid, this algorithm will be the most inefficient because every index needs to
//       be looped through.
//  - Best case: Constant O(1)
//    -> If the string is always odd, the function will always early return after the first line
