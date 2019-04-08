const {describe, expect, it} = require('./testUtils');

//using merge sort 
mergeSort = (arr) => {
  //if there is just one value stop recursion
  if (arr.length === 1) 
    return arr

  //divide and conquer
  const middle = Math.floor(arr.length / 2) 
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  //merge left and right
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

//merging left and right function
merge = (left, right) => {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  //merge according with word length
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft].length < right[indexRight].length) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

//using default js sort function 
sort_length = (array) => {
  if (!Array.isArray(array))
    return [];
  array.sort((a,b) => {
      return a.length - b.length;
  });
  return array;
}

//helper variables for testing
test = ["asd","asdasdasdas", "as", "s","","sadasdasd"];
expected = ["","s","as","asd","sadasdasd","asdasdasdas"];
test2 = ["123","1", "12345","","12345678"];
expected2 = ["","1","123","12345","12345678"];

describe('sort_length', () => {
  it(test, () => {
      const result = sort_length(test);
      expect(result).toBe(expected);
  });
  it(test, () => {
      const result = mergeSort(test);
      expect(result).toBe(expected);
  });
  it(test2, () => {
    const result = sort_length(test2);
    expect(result).toBe(expected2);
  });
  it(test2, () => {
      const result = mergeSort(test2);
      expect(result).toBe(expected2);
  });
});