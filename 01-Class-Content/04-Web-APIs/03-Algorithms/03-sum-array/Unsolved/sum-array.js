// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr, i = 0, sum = 0) {
  if (i === arr.length) return sum
  sum += arr[i]
  return sumArray(arr, i + 1, sum)
};

