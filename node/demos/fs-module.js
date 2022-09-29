const fs = require('fs')

console.log(typeof fs);

const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia iste id corrupti esse molestiae eos, laboriosam animi, officiis ipsam aliquam consequuntur fugiat. Rerum, repudiandae!'

fs.writeFile('./hello.text', data, () => {
  console.log('Done writing file...');
})

fs.appendFile('./Hello.txt', 'hello cohort27!', () => 
  console.log('done'))