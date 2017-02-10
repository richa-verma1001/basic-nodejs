// References: https://nodejs.org/api/globals.html
// https://www.youtube.com/watch?v=lK42xIMcA0Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=5

console.log('Welcome to NodeJS-App');

// Available via global
console.log(__dirname);
console.log(__filename);

//paths
const path = require('path');
console.log(path.dirname(__filename));

//Global functions
setTimeout(()=> {
  console.log('2 secs have passed');
},2000);

let timer = 0;
const interval = setInterval(() => {
  timer = timer + 2;
  console.log(`${timer} has passed`);
  if(timer >= 8)
    clearInterval(interval);
},2000);

// Funtions
// sayHi();  ==> This won't work because of hoisting. sayHi isn't avialable yet
const sayHi = () => {
  console.log('Hi!!');
}
sayHi();

// requires, exports
const helper = require('./src/helper');
helper.counter(['a','b','c']);
helper.add(1,2);

//Events
//https://www.youtube.com/watch?v=NtrnaTKqFPQ&index=8&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp


// http server available with node. Recommended to pull in Express which provides
// more support, easy APIs and lots of built in features
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(`request path is ${req.url}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Read / Write files (Sync and Async)
//https://www.youtube.com/watch?v=U57kU311-nE&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=9
const fs = require('fs');
var data = fs.readFileSync('readme.txt','utf8');
console.log(data);
fs.writeFileSync('write.txt', data);
// Async version
//fs.readFile('readme.txt','utf8', function(err, data) {
  //fs.writeFile('filename.txt', data);
//});
// Delete file
//fs.unlink('write.txt');
