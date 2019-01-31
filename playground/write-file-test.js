var fs = require('fs');

//create a file named mynewfile1.txt:
console.log(__dirname+"/mynewfile1");
fs.writeFile(__dirname+'/mynewfile1.html', '<h1>Hello content!</h1>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
