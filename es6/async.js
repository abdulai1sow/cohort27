//synchronous code execution
const colors = ['red', 'green', 'blue']
console.log('before the forEach...');

colors.forEach(function (color, idx) {
  console.log(`${edx + 1}-${color}`);
})

console.log('after the forEach...');