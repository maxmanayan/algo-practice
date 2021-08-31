// Bubble Sort Example

// Random
const sampleArr = [1, 9, 5, 6, 4, 7, 8, 2, 3];
// Sorted
// const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Reversed
// const sampleArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSortEx = (arr) => {
  let swap;
  let lastIndex = arr.length - 1;
  let newArr = [...arr];
  do {
    swap = false;
    for (let i = 0; i < lastIndex; i++) {
      if (newArr[i] > newArr[i + 1]) {
        let temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        swap = true;
      }
    }
    lastIndex--;
  } while (swap);

  return newArr;
};

console.log(bubbleSortEx(sampleArr));

// Max's Notes:
// Explanation: --------------------------------------------------------------------------------------------------
// 1) We set the swap (Boolean) variable to use as a condition for our do/while loop.
//  - Every time our do/while loop restarts, swap is set to false as a possible exit case.
//  - Swap will only be set to true if our for loop finds a higher number at the current index then the next index.
//  - So in our last do/while loop, swap will never be set to true.
//  - We use a do/while loop to test our array at least once, and continue checking if unsorted.
//  - If swap is NEVER set to true, it means our array is already sorted.

// 2) Next we set the lastIndex variable to ensure the for loop never runs beyond the second-to-last index.
//  - Inside our for loop, we set a condition: IF the current index is greater than the next, swap them.
//  - In our next for loop iteration, the current index will now be the previous index (if it was higher).
//  - It will then test the number against the next index and continue swapping if greater

// 3) Notice that after each for loop completes, we subtract one from lastIndex:
//  - This is because every time a for loop completes, the final for loop iteration should push the highest unsorted
//  - number to the end.
//  - Now we know that the current 'lastIndex' is properly sorted, we can end the for loop before it reaches that index,
//  - thus saving us unnecessary for loop iterations.

// 4) Finally, we create a newArr variable equal to our sampleVariable, so we don't alter our original array.
//  - We will return this newArr variable, which should be sorted after the do/while loop ends.

// Time-Complexity: --------------------------------------------------------------------------------------------------
// 1) Worst Case: O(n^2)
//  - Only if array is REVERSE SORTED -> Each index in the sampleArr needs to be sorted to the last index
//  - If our sampleArr was reverseSorted, there would be 9 for loop iterations, and each iteration
//  - would require a sort. So that's 9x9 operations (n*n).
//  - If we added a '10' to the beginning of sampleArr, it would be 10x10.

// 1) Usually will fall between 0(n^2) and 0(n)

// 2) Best Case: O(n)
//  - Only if array is ALREADY SORTED -> the for loop will only complete once, and swap will stay false
//  - For each new index in sampleArr, we only have to run one more iteration of for loop

// ***Best used when sorting through short, unordered lists***
