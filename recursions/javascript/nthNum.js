// nth.js

// given the following series of numbers
// how would you get the nth number in the sequence
// ex) 0, 1, 1, 2, 3, 5, 8, 13, 21

// (0) // 0
// (1) // 1
// (7) // 13
// (n) // ?

// please complete first thing at noon-30 as I begin code reviews
// 4 the assessment
// go over this after standup tmrw morning

const sampleArr = [0, 1, 1, 2, 3, 5, 8, 13, 21]

const nthNum = (arr, n) => {
  if (arr.length - 1 >= n) return arr[n];
  else if (arr.length - 1 < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return nthNum(arr, n)
  }
}

console.log(nthNum(sampleArr, 10)); //55