function mergeSort (arr) {
    if (arr.length === 1) 
      return arr
  
    const middle = Math.floor(arr.length / 2) 
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
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

sort_length = (array) => {
    array.sort((a,b) => {
        return a.length - b.length;
    });
    return array;
}

console.log(sort_length(["asd","asdasdasdas", "as", "s","","sadasdasd"]));
console.log(mergeSort(["asd","asdasdasdas", "as", "s","","sadasdasd"]));