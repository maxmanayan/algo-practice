// Instructions: 

// given the following series of numbers
// how would you get the nth number in the sequence
// ex) 0, 1, 1, 2, 3, 5, 8, 13, 21

// (0) // 0
// (1) // 1
// (7) // 13
// (n) // ?


const sampleArr = [0, 1]

const nthNum = (arr, n) => {
  if (arr.length < 2) return arr[0]
  if (arr.length - 1 >= n) return arr[n];
  else if (arr.length - 1 < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return nthNum(arr, n)
  }
}

console.log(nthNum(sampleArr, 10)); //55

// Max's Notes ----------------------------------------------------------------------------
// Assumptions:
//  - sampleArr will always be asking to continue pattern of adding last two indexes

// Edge Cases:
//  - if sampleArr only contains [0] --> 
//    we want to early return (or we could add one to array and perform another recursion)

// Time-Complexity = O(n) - Linear
//  - For every new increment of 'n', we must run another recursion

// Explanation:
//  - In our first IF statement of nthNum(), we are saying if the array only has a value of 0, 
//    return 0... if specified, we could add 1 to arr and keep performing recursions
//  - In our second IF statement of nthNum(), we are providing the base case of the recursion:
//    if the last index in our array is greater than or equal to 'n', just return the value of the array at index 'n'
//    [NOTE] - our function should stop executing when the last index is 'n'... so the greater than sign is just an extra check if we keep recursing
//  - The else if block of nthNum() is where we tell our function to perform a recursion if the base case hasn't been reached.
//    We are saying if the last index in our array is less than 'n', push the sum of the last to indexes of the array onto our current array.
//    Then we will call our nthNum() function again with our new array, and we will be one step closer to reaching our base case