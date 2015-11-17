//prototypal inheritance in JavaScript

// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getFullName: function(){
//     return this.firstname + ' ' + this.lastname;
//   }
// };
//
// var john = {
//   firstname: 'John',
//   lastname: 'Doe'
// };

//don't ever do this: __proto__ is deprecated
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);
//
// var jane = {
//   firstname: 'Jane'
// };
//
// jane.__proto__ = person;
// console.log(jane.getFullName());
//
// for (var prop in john) {
//   if (john.hasOwnProperty(prop)) {
//     console.log(prop + ": " + john[prop]);
//   }
// }


//--------------------------------------------------------//


//Everything is an object (or a primitive)

// var a = {};
// var b = function(){};
// var c = [];


//--------------------------------------------------------//
//other ways to build objects and set prototypes

//function constructors and the "new" keyword



// function Person() {
//   this.firstname = 'John';
//   this.lastname = 'Doe';
// }
//
// var john = new Person();
// console.log(john);




//constructor functions were only implemented to try to appease programmers coming from other languages
//make sure you're using them properly
//1. a function intended to be a constructor function should use a capital letter for its name
//2. must also use the new keyword
//you can use a linter to warn you about these mistakes
//constructor functions are likely going to be superceded in the future



//--------------------------------------------------------//

//other languages have classes
//embrace that JavaScript has prototypal inheritance
//Object.create : pure prototypal inheritance

var person = {
  firstname: 'default',
  lastname: 'default',
  greet: function() {
    console.log('Hi ' + this.firstname);
  }
};

var lacey = Object.create(person);
lacey.firstname = 'Lacey';
lacey.lastname = 'Junior';
// console.log(lacey);

lacey.greet();
