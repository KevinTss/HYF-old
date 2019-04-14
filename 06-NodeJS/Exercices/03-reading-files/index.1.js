const fs = require('fs');

fs.writeFile('target.txt', 'kevin', err => {
  if (err) {
    throw err;
  }
  console.log('File saved')
});