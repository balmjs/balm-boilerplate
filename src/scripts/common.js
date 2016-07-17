function sayHello(msg) {
  console.log('Hello ' + msg);
}

// ES5
// module.exports.sayHello = sayHello;

// ES6
export {
  sayHello
};
