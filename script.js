const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => { 
  if (err) {
    console.log('Error');
  }
  console.log('Async ', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync ',file.toString());

fs.appendFile('./hello.txt',' This is so cool!', err = {
  if (err) {
    console.log('Error');
  }
})