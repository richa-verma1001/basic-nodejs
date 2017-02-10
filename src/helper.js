const counter = (arr) => {
  console.log(`arr length is ${arr.length}`);
};

const add = (a,b) => {
  console.log(`sum is ${a+b}`);
}

//module.exports.counter = counter;
//module.exports.add = add;
//or
module.exports = {
  counter: counter,
  add: add
}
