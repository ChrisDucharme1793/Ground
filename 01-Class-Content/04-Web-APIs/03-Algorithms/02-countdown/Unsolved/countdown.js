// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
  if (num < 1) return
  console.log(num)
  return countdown(num - 1)
};

