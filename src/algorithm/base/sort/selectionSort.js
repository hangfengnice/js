const {swap} = require('../../utils')

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i ++) {
    let minIndex = i
    for(let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}
module.exports = {
  selectionSort
}