// Merge Sort Example

// Links:
// simple breakdown - [ https://stackabuse.com/merge-sort-in-javascript/ ]
// merge sort time complexity explanation - [ https://www.journaldev.com/31541/merge-sort-algorithm-java-c-python ]
// log n time complexity eli5 = [ https://www.reddit.com/r/explainlikeimfive/comments/jefwx/eli5_what_does_it_mean_when_a_problem_is_logn/ ]

// Steps:
// 1. Split the given list into two halves
// 2. Continue dividing the subarrays in the same manner until
//    you are let with only single element arrays
// 3. Starting with the single element arrays, merge the subarrays
//    so that each merged subarray is sorted
// 4. Repeat Step 3 until end up with single sorted array

const sampleArr = [4, 8, 7, 2, 11, 1, 3];
const sampleEdge = [11, 8];

const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  const half = array.length / 2;

  if (array.length < 2) return array;

  const left = array.splice(0, half);

  return merge(mergeSort(left), mergeSort(array));
};

console.log(mergeSort(sampleArr));
console.log(mergeSort(sampleEdge));

// Max's NOTES:
// Overview:
// 1. We are recursively calling our mergeSort function until our array is broken down into single elements
// 2. Once we break every sub-array down into single elements, we begin to work backwards and sort through the arrays

// Purpose of each function:
// merge() - sorts each half of the array and continually builds the length of the array back to the original
// mergeSort() - recursively breaks the array in half until base case is met, and then returns merged arrays

// Detailed Explanation:
// 1. When we first call our mergeSort(), we split our largest array into two halves.
//    NOTE - If the array's length is odd, the left half will always be smaller
// 2. Our base case for mergeSort() is when there is only 1 index in the array (line 34)
// 3. We will continue recursively calling mergeSort() until we are able to return a base case
// 4. Each time we call mergeSort(), we also call merge(), which won't actually begin sorting
//    until our base cases start being returned (each array is broken down to 1 element)
// 5. Once we begin sorting, our merge calls begin working backwards until our final merge:
//    where the first two halves of our largest array (now sorted) are merged and sorted together.

// Time-Complexity
// O(n * log n) - all cases
// 1. the array of size N is divided at most into Log n parts
// 2. then the merging of all sub arrays takes O(n) - linear time (one operation for each index)
