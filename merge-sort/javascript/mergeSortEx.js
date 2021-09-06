// Merge Sort Example

// Links:
// simple breakdown - [ https://stackabuse.com/merge-sort-in-javascript/ ]

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

  console.log("arr", arr);
  return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
  const half = array.length / 2;

  if (array.length < 2) return array;

  const left = array.splice(0, half);
  console.log("left", left, "right", array);
  return merge(mergeSort(left), mergeSort(array));
};

console.log(mergeSort(sampleArr));
console.log(mergeSort(sampleEdge));
