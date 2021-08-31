// Bubble Sort Example

const sampleArr = [1, 9, 5, 6, 4, 7, 8, 2, 3];
// const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    console.log("newArr", newArr);
    lastIndex--;
  } while (swap);

  return newArr;
};

console.log(bubbleSortEx(sampleArr));

// Max's Notes:
// Explanation:
// 1) We set the swap (Boolean) variable to use as a condition for our do/while loop
//  - Every time our do/while loop restarts, swap is set to false as an exit case.
//  - swap will only be set to true if our for loop finds a higher number at the current index then the last index
//  - if swap is never set to true, it means our array is already sorted
// 2)
