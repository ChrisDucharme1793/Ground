// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num, i = 1) {
  if (i > num) return
  console.log(i)
  return logNums(num, i + 1)
};

