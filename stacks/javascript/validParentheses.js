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
