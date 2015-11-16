//prototypal inheritance in JavaScript

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
};

var john = {
  firstname: 'John',
  lastname: 'Doe'
};

//don't ever do this: __proto__ is deprecated
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName());

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}


//--------------------------------------------------------//


//Everything is an object (or a primitive)

var a = {};
var b = function(){};
var c = [];


//--------------------------------------------------------//
//other ways to build objects and set prototypes

//function constructors and the "new" keyword

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

var john = new Person();
console.log(john);
