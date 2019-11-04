// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num, i = 0) {
  if (i > num) return
  if (i % 2 === 0) console.log(i)
  return logEvenNums(num, i + 1)
};

