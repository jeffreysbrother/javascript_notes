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
