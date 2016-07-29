import $ from 'jquery';

function sayHello(msg) {
  console.log('Hello ' + msg);
  console.log('current window width:', $(window).width());
}

// ES5
// module.exports.sayHello = sayHello;

// ES6
export {
  sayHello
};
