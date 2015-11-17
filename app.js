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

// var person = {
//   firstname: 'default',
//   lastname: 'default',
//   greet: function() {
//     console.log('Hi ' + this.firstname);
//   }
// };
//
// var lacey = Object.create(person);
// lacey.firstname = 'Lacey';
// lacey.lastname = 'Junior';
//
// lacey.greet();



//--------------------------------------------------------//
//in other programming languages, a class is not an object
//it's a definition or template.
//in ES6, JavaScript's classes are different than the usual conception
//of classes
  //the class IS an object in JavaScript version ES6
//the author suggests to appreciate prototypal inheritance instead of
//trying to mimic other programming languages.
  //"extends" keyword used when using classes in ES6
//just syntactic sugar...a different way to type something that doesn't
//actually change the way it works under the hood.


//--------------------------------------------------------//
//CLOSURES in JavaScript
//a vital concept
//notoriously difficult to understand

function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  };

}

// greet("hiii")("james");

var sayHi = greet("Hi");
//most expect the greet function to be gone
//at this point, (it's popped off the stack) but the
//memory space is not cleared.
//the whattosay variable is still available
sayHi("Tony");

//the execution context "closes in" its outer variables
//this is called a closure

//closures are simply a feature of the JS programming languages
//they just happen.

//it doesn't matter when we invoke a function
//we don't have to worry if its outer environments are still
//running.
//


//--------------------------------------------------------//
//functional programming in JavaScript
//first-class functions: functions that behave as objects
  //can pass them as parameters, return from other functions

//thinking and coding in terms of functions
//an entirely different way of thinking
//can't do this stuff without first-class functions

    function mapForEach(arr, fn) {

      var newArr = [];
      for (var i=0; i < arr1.length; i++) {
        newArr.push(
          fn(arr[i])
        );
      }

      return newArr;

    }

    //print original array
    var arr1 = [1, 2, 3];
    console.log(arr1);

    //create second array
    var arr2 = mapForEach(arr1, function(item) {
      return item * 2;
    });
    console.log(arr2);

    //create third array
    var arr3 = mapForEach(arr1, function(item) {
      return item > 2;
    });
    console.log(arr3);






//sdf
